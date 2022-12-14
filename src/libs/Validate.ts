import Constants from '@/libs/Constants'

export default class Validate {
   static required(value: string) {
      return !!value;
   }

   static isYYYYMMDD(value: string) {
      return /^([0-9]{4}).((0[1-9]{1})|(1[0-2]{1})).(([0-2]{1}[1-9]{1})|(3[0-1]{1}))$/.test(value);
   }

   static isPhone(value: string) {
      return /^\+380([0-9]{9})$/.test(value);
   }

   static is10NumbersPhone(value: string) {
      return /^0([0-9]{9})$/.test(value);
   }

   static isValidDistrict(value: string) {
      return Constants.districts.includes(value);
   }

   static isYearInterval(value: string) {
      return /^\d{4}-\d{4}$/.test(value);
   }

   static isValidRoles(what: string[]) {
      for (let i = 0; i < what.length; i++) {
         if (Constants.roles.indexOf(what[i]) === -1) {
            return false;
         }
      }
      return true;
   }
}