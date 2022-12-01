import mongoose from 'mongoose'
import { IUser } from '@/interfaces/interfaces'
import Validate from '@/libs/Validate'

const { Schema, model } = mongoose;

const UserSchema = new Schema<IUser>({
   email: {
      type: String,
      required: true,
      unique: true,
      maxlength: [50, 'to many symbols'],
   },
   name: {
      type: String,
      required: true,
      maxlength: [50, 'to many symbols'],
   },
   password: {
      type: String,
      required: true,
   },
   isActivated: {
      type: Boolean,
      default: false,
   },
   activationLink: {
      type: String,
      maxlength: 1000,
   },
   roles: {
      type: [String],
      default: ['user'],
      validate: {
         validator: Validate.isValidRoles,
         message: () => `Incorect roles`,
      }
   }
});

export default model<IUser>('User', UserSchema);