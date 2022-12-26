import AssistanceModel from '@/models/AssistanceModel'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import Constants from '@/libs/Constants'
import ApiError from '@/exeptions/ApiError'
import ToolsModel from '@/models/ToolsModel'
import { type FilterQuery } from 'mongoose'
import type { AnyObject, AssistanceForm, GoogleSheetsFilters } from '@/interfaces/interfaces'


export default class AssistanceService {
   static async catchAssistaceForm(form: AssistanceForm) {
      const saved = await AssistanceModel.create(form)
         .catch(e => { throw ApiError.BadRequest(e.message, e.errors) });
      return saved;
   }

   static async sendAssistanceForm(surname: string, name: string, patronymic: string) {
      const form = await AssistanceModel.find({ name, surname, patronymic }, { __v: 0 }).lean();
      if (!form.length) {
         throw ApiError.BadRequest(`Увы, ничего не найдено по запросу ${surname} ${name} ${patronymic}`);
      }
      return form;
   }

   static async sendHumansList({ limit = Infinity, page = 1 }: { limit: number, page: number }) {
      const skip = (page - 1) * limit;
      const humansList = await AssistanceModel.find({}, { name: 1, surname: 1, patronymic: 1, _id: 1 })
         .skip(skip)
         .limit(limit)
         .lean();

      const count = await AssistanceModel.count();
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

   static async saveFormsToSheet(filters: GoogleSheetsFilters) {
      const api = await ToolsModel.find().limit(1);

      if (!api.length) {
         return { message: 'Интеграция не настроена!', link: `` };
      }
      const conditions: FilterQuery<AssistanceForm>[] = [];

      if (filters.district) {
         conditions.push({ district: filters.district });
      }
      if (filters.birth.from && filters.birth.to) {
         conditions.push({
            $expr: {
               $function: {
                  body: "function (birth, filters) { return +birth.split('.')[0] >= +filters.birth.from && +birth.split('.')[0] <= +filters.birth.to }",
                  args: ["$birth", filters],
                  lang: "js"
               }
            },
         });
      }

      const finalCondition = conditions.length ? { $and: conditions } : {};
      const forms = await AssistanceModel.find(finalCondition).lean();

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
         }, <AnyObject>{});
         await sheet.addRow(sheetObj);
      }

      return {
         message: 'Успешно сформировано!',
         link: `https://docs.google.com/spreadsheets/d/${api[0].api.google.service.sheetId}`
      };
   }

   static async getFormById(id: string) {
      const form = await AssistanceModel.findById(id, { __v: 0, _id: 0 }).lean();
      return form;
   }
}