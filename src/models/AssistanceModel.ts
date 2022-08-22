import mongoose from "mongoose";
import { AssistanceForm } from "../interfaces/AssistanceForm";
import Validate from "../libs/Validate";

const { Schema, model } = mongoose;
const AssistanceSchema = new Schema<AssistanceForm>({
   name: {
      type: String,
      required: true,
   },
   surname: {
      type: String,
      required: true,
   },
   patronymic: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
      validate: {
         validator: Validate.isPhone,
         message: (props) => `${props.value} is not a valid phone!`
      }
   },
   birth: {
      type: String,
      required: true,
      validate: {
         validator: Validate.isDDMMYYYY,
         message: (props) => `${props.value} is not a valid birth!`
      }
   },
   district: {
      type: String,
      required: true,
      validate: {
         validator: Validate.isValidDistrict,
         message: (props) => `${props.value} is not a valid district!`
      }
   },
   street: {
      type: String,
      required: true,
   },
   house: {
      type: String,
      required: true,
   },
   flat: {
      type: String,
      required: true,
   },
   people_num: {
      type: Number,
      required: true,
   },
   people_fio: {
      type: Array,
      default: [],
      validate: {
         validator: Array.isArray,
         message: (props) => `${props.value} is not a valid type!`
      }
   },
   invalids: {
      type: String,
      default: 'Нет',
   },
   children: {
      type: String,
      default: 'Нет',
   },
   children_age: {
      type: Array,
      default: [],
      validate: {
         validator: Array.isArray,
         message: (props) => `${props.value} is not a valid type!`
      }
   },
   food: {
      type: String,
      default: 'Нет',
   },
   drugs: {
      type: String,
      default: 'Нет',
   },
   water: {
      type: String,
      default: 'Нет',
   },
   products_detail: {
      type: String,
      default: '',
   },
   gigien: {
      type: String,
      default: 'Нет',
   },
   gigien_num: {
      type: String,
      default: '',
   },
   pampers: {
      type: String,
      default: '',
   },
   diet: {
      type: String,
      default: '',
   },
   pers_data_agreement: {
      type: Boolean,
      required: true,
   },
   photo_agreement: {
      type: Boolean,
      required: true,
   }
});

export default model<AssistanceForm>('Assistance', AssistanceSchema);