import Constants from '@/libs/Constants'

export default class Validate {
   static required(value: string): boolean {
      return !!value;
   }

   static isYYYYMMDD(value: string): boolean {
      return /^([0-9]{4})-((0[1-9]{1})|(1[0-2]{1}))-(([0-2]{1}[1-9]{1})|(3[0-1]{1}))$/.test(value);
   }

   static isPhone(value: string) {
      return /^\+380([0-9]{9})$/.test(value);
   }

   static isValidDistrict(value: string) {
      return Constants.districts.includes(value);
   }

   static isYearInterval(value: string): boolean {
      return /^\d{4}-\d{4}$/.test(value);
   }
}