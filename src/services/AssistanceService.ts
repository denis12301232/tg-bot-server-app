import AssistanceModel from "../models/AssistanceModel";
import { AssistanceForm } from "../interfaces/AssistanceForm";
import GoogleApi from "../libs/GoogleApi"
import { GoogleSpreadsheet } from "google-spreadsheet"
import AssistanceFormDto from "../dtos/AssistanceFormDto";
import Constants from "../libs/Constants";
import { Obj } from "../interfaces/Obj";


export default class AssistanceService {
   static async catchAssistaceForm(form: AssistanceForm) {
      const user = await AssistanceModel.create(form);
      return user;
   }

   static async sendAssistanceForm(surname: string, name: string, patronymic: string) {
      const form = await AssistanceModel.find({ name, surname, patronymic }, { __v: 0 })
      //Эльвира Зайцева Владимировна
      //const form = await AssistanceModel.find({ fio }, { __v: 0 });
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
      const updateResult = await AssistanceModel.updateOne({ _id: id }, { $set: form });
      return updateResult;
   }

   static async saveFormsToSheet() {
      // const forms = await AssistanceModel.find();
      // const OAuth2Client = GoogleApi.OAuth2Client();
      // const doc = new GoogleSpreadsheet('1DZNbfsQsf9vF4E4_vXhH1xJlhEMS8Xrw7aTlMQhXNeo');
      // doc.useOAuth2Client(OAuth2Client);
      // await doc.loadInfo();
      // const sheet = doc.sheetsByIndex[0];
      // await sheet.clear();
      // await sheet.loadCells('A1:S1');

      // const allFields = Object.keys(Constants.assistance);

      // allFields.forEach((item, index) => {
      //    const cell = sheet.getCell(0, index);
      //    cell.value = (<Obj>table)[item];
      // });
      // await sheet.saveUpdatedCells();

      // for (const item of forms) {
      //    const sheetObj = allFields.reduce((obj, elem) => {
      //       if (Array.isArray((<any>item)[elem])) {
      //          obj[(<Obj>table)[elem]] = (<any>item)[elem].join(',');
      //       } else if ((<any>item)[elem] === true) {
      //          obj[(<Obj>table)[elem]] = 'Да';
      //       } else if ((<any>item)[elem] === false) {
      //          obj[(<Obj>table)[elem]] = 'Нет';
      //       } else {
      //          obj[(<Obj>table)[elem]] = (<any>item)[elem];
      //       }
      //       return obj;
      //    }, <Obj>{});
      //    await sheet.addRow(sheetObj);
      // }
      // return { message: "Success" };
   }
}