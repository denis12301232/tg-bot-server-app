import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const { Schema, model } = mongoose;

const UserSchema = new Schema<IUser>({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   name: {
      type: String,
      required: true,
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
   },
   roles: {
      type: [String],
      default: ['user']
   }
});

export default model<IUser>('User', UserSchema);