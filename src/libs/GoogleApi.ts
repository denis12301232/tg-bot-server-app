import { google } from 'googleapis'
import { dirname } from 'path'
import { config } from 'dotenv'

config({ path: dirname(require.main?.filename!) + '/.env' });

export default class GoogleApi {
   static readonly CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
   static readonly CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
   static readonly REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL;
   static readonly REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
   static readonly USER = process.env.GOOGLE_USER;
   static readonly APP_PASS = process.env.GOOGLE_APP_PASS;
   static readonly SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
   static readonly SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

   static OAuth2Client() {
      const OAuth2Client = new google.auth.OAuth2(this.CLIENT_ID, this.CLIENT_SECRET, this.REDIRECT_URL);
      OAuth2Client.setCredentials({ refresh_token: this.REFRESH_TOKEN });
      return OAuth2Client;
   }

   static serviceAuth(scopes: Array<string>) {
      const auth = new google.auth.GoogleAuth({
         keyFile: './api/google-service.json',
         scopes,
      });
      return auth;
   }
}

