declare namespace NodeJS {
   interface ProcessEnv {
      readonly NODE_ENV: 'devlopment' | 'production';
      readonly PORT: number;
      readonly MONGO_URL: string;
      readonly MONGO_NAME: string;
      readonly SERVER_URL: string;
      readonly CLIENT_URL: string;
      readonly JWT_ACCESS_SECRET: string;
      readonly JWT_REFRESH_SECRET: string;
      readonly GOOGLE_USER: string;
      readonly GOOGLE_APP_PASS: string;
      readonly BOT_TOKEN: string;
      readonly SERVER_DOMAIN: string;
   }
}