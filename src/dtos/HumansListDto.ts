import { AssistanceForm } from '@/interfaces/interfaces'
import { Types } from 'mongoose'

export default class HumansListDto {
   readonly humansList: Array<{ fio: string, _id: Types.ObjectId }>

   constructor(model: Array<(AssistanceForm & { _id: Types.ObjectId })>) {
      this.humansList = model.map(item => { 
         return {
            _id: item._id,
            fio: `${item.surname} ${item.name} ${item.patronymic}`,
         }
      });
   }
}