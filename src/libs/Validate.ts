import { AssistanceForm } from "@/interfaces/AssistanceForm"

export default class Validate {
   static required(value: string): boolean {
      return !!value;
   }

   static isDDMMYYYY(value: string): boolean {
      return /^([0-9]{4})-((0[1-9]{1})|(1[0-2]{1}))-(([0-2]{1}[1-9]{1})|(3[0-1]{1}))$/.test(value);
   }

   static isPhone(value: string) {
      return /^\+380([0-9]{9})$/.test(value);
   }

   static isValidDistrict(value: string) {
      return [
         'Индустриальный', 'Киевский', 'Московский', 'Немышлянский', 'Новобаварский',
         'Основянский', 'Слободской', 'Холодногорский', 'Шевченковский'
      ].includes(value);
   }

   static isYearInterval(value: string): boolean {
      return /^\d{4}-\d{4}$/.test(value);
   }

   static isFormCorrect(form: AssistanceForm): boolean {

      const requiredFields = [
         'name',
         'surname',
         'patronymic',
         'phone',
         'birth',
         'district',
         'street',
         'house',
         'flat',
         'people_num', 'pers_data_agreement', 'photo_agreement'
      ];
      for (const item of requiredFields) {
         if (!Validate.required((<any>form)[item])) {
            return false;
         }
      }

      if (!Validate.isPhone(form.phone)) return false;
      if (!Validate.isDDMMYYYY(form.birth)) return false;

      return true;
   }
}