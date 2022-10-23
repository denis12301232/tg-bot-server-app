import { config } from 'dotenv'


config();

export default class GoogleApi {
   static readonly USER = process.env.GOOGLE_USER;
   static readonly APP_PASS = process.env.GOOGLE_APP_PASS;
}

