import { AssistanceForm } from "../interfaces/AssistanceForm";
import { Types } from "mongoose";
import Constants from "../libs/Constants";

export default class AssistanceFormDto {
   readonly humansFormList: Array<{ _id: Types.ObjectId, form: AssistanceForm }>

   constructor(model: Array<(AssistanceForm & { _id: Types.ObjectId })>) {
      this.humansFormList = model.map(item => {
         return {
            _id: item._id,
            form: Object.keys(Constants.assistance).reduce((obj, elem) => {
               (<any>obj)[elem] = (<any>item)[elem];
               return obj;
            }, <AssistanceForm>{})
         }
      });
   }
}