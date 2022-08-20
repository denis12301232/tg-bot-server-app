import mongoose from "mongoose";
import { ITools } from "../interfaces/ITools";

const { Schema, model } = mongoose;

const ToolsSchema = new Schema<ITools>({
   api: {
      google: {
         user: {
            type: String,
         },
         sheetId: {
            type: String,
         },
         clientId: {
            type: String
         },
         clientSecret: {
            type: String,
         },
         redirectUrl: {
            type: String,
            default: 'https://developers.google.com/oauthplayground',
         },
         refreshToken: {
            type: String,
         },
      }
   }
});

export default model<ITools>('Tools', ToolsSchema);