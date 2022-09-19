import mongoose from "mongoose"
import { ITools } from "@/interfaces/ITools"

const { Schema, model } = mongoose;

const ToolsSchema = new Schema<ITools>({
   api: {
      google: {
         user: {
            type: String,
            default: '',
         },
         app_password: {
            type: String,
            default: '',
         },
         service: {
            user: {
               type: String,
               default: '',
            },
            privateKey:{
               type: String,
               default: '',
            },
            sheetId: {
               type: String,
               default: '',
            }
         }
      }
   },
});

export default model<ITools>('Tools', ToolsSchema);