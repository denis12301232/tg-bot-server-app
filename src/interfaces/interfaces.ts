import { Types } from 'mongoose'

export interface AnyObject {
   [name: string]: any;
}

export interface StringObject {
   [name: string]: string;
}

export interface Payload {
   readonly email: string;
   readonly id: string;
   readonly isActivated: boolean;
   readonly isAdmin: boolean;
   readonly name: string;
   readonly iat: number,
   readonly exp: number,
}

export interface IToken {
   user: Types.ObjectId,
   refreshToken: string,
}

export interface IUser {
   email: string,
   password: string,
   name: string,
   isActivated: boolean,
   activationLink: string,
   roles: string[],
}

export interface ITools {
   readonly api: {
      readonly google: {
         user: string,
         app_password: string,
         readonly service: {
            user: string,
            privateKey: string,
            sheetId: string,
         }
      }
   }
}

export interface AssistanceForm {
   name: string,
   surname: string,
   patronymic: string,
   phone: string,
   birth: string,
   district: string,
   street: string,
   house: string,
   flat: string,
   people_num: number,
   people_fio: string[],
   invalids: string,
   children: string,
   children_age: string[],
   food: string,
   drugs: string,
   water: string,
   products_detail: string,
   gigien: string,
   gigien_num: string,
   pampers: string,
   diet: string,
   pers_data_agreement: boolean,
   photo_agreement: boolean,
}