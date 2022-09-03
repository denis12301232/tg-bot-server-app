import AssistanceModel from "../models/AssistanceModel";
import { AssistanceForm } from "../interfaces/AssistanceForm";
import GoogleApi from "../libs/GoogleApi"
import { GoogleSpreadsheet } from "google-spreadsheet"
import Constants from "../libs/Constants";
import { Obj } from "../interfaces/Obj";
import ApiError from "../exeptions/ApiError";
import Validate from "../libs/Validate";
import ToolsModel from "../models/ToolsModel";
import { Types } from "mongoose";


export default class AssistanceService {
   static async catchAssistaceForm(form: AssistanceForm) {
      const saved = await AssistanceModel.create(form)
         .catch(e => { throw ApiError.BadRequest(e.message, e.errors) });
      return saved;
   }

   static async sendAssistanceForm(surname: string, name: string, patronymic: string) {
      const form = await AssistanceModel.find({ name, surname, patronymic }, { __v: 0 });
      return form;
   }

   static async sendHumansList({ limit = Infinity, page = 1 }: any) {
      const skip: number = (page - 1) * limit;
      const humansList = await AssistanceModel.find({}, { name: 1, surname: 1, patronymic: 1, _id: 1 })
         .skip(skip)
         .limit(limit);

      const count: number = await AssistanceModel.count();
      return { humansList, count };
   }

   static async deleteHuman(id: string) {
      const deleteResult = await AssistanceModel.deleteOne({ _id: id });
      return deleteResult;
   }

   static async modifyAssistanceForm(id: string, form: AssistanceForm) {
      const updateResult = await AssistanceModel.updateOne({ _id: id }, { $set: form }, { runValidators: true })
         .catch(e => { throw ApiError.BadRequest(e.message, e.errors) });
      return updateResult;
   }

   static async saveFormsToSheet(filter: string, query: string) {
      const api = await ToolsModel.find().limit(1);

      if (!api.length) {
         return { message: "Интеграция не настроена!", link: `` };
      }

      let forms: Array<AssistanceForm & { _id: Types.ObjectId }>;

      if (filter === 'all') {
         forms = await AssistanceModel.find();
      } else if (filter === 'district' && Validate.isValidDistrict(query)) {
         forms = await AssistanceModel.find({ district: query });
      } else if (filter === 'birth' && Validate.isYearInterval(query)) {
         forms = await AssistanceModel.find({
            $where: `function(){
               const year = +this.birth.split('-')[0];
               const min = +${query.split('-')[0]};
               const max = +${query.split('-')[1]};
               return year >= min && year <= max;
            }`
         });
         // forms = await AssistanceModel.aggregate([{
         //    $match: {
         //       $expr: {
         //          $function: {
         //             body: function (birth: string, query: string) {
         //                const year = +birth.split('-')[0];
         //                const min = +query.split('-')[0];
         //                const max = +query.split('-')[1];
         //                return year >= min && year <= max;
         //             },
         //             args: ["$birth", query],
         //             lang: "js"
         //          }
         //       }
         //    }
         // }]);
      } else {
         throw ApiError.BadRequest('Неверный запрос!');
      }

      if (!forms.length) throw ApiError.BadRequest('Увы, ничего не найдено по запросу!');

      const doc = new GoogleSpreadsheet(api[0].api.google.service.sheetId);
      await doc.useServiceAccountAuth({
         client_email: api[0].api.google.service.user,
         private_key: api[0].api.google.service.privateKey,
      });
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      await sheet.clear();
      await sheet.loadCells('A1:X1');
      const allFields: Array<[any, { display: string }]> = Object.entries(Constants.assistance);
      allFields.forEach(async ([key, value], index) => {
         const cell = sheet.getCell(0, index);
         cell.value = value.display;
      });
      await sheet.saveUpdatedCells();

      for (const item of forms) {
         const sheetObj = allFields.reduce((obj, [key, value]: [keyof AssistanceForm, { display: string }]) => {
            if (Array.isArray(item[key])) {
               obj[value.display] = (<string[]>item[key])!.join(',');
            } else if (item[key] === true) {
               obj[value.display] = 'Да';
            } else if (item[key] === false) {
               obj[value.display] = 'Нет';
            } else {
               obj[value.display] = item[key];
            }
            return obj;
         }, <Obj>{});
         await sheet.addRow(sheetObj);
      }

      return {
         message: "Успешно сформировано!",
         link: `https://docs.google.com/spreadsheets/d/${api[0].api.google.service.sheetId}`
      };
   }
}