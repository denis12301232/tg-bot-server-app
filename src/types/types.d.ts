declare namespace Express {
   export interface Request {
      user?: string | import('jsonwebtoken').JwtPayload;
   }
}

declare namespace NodeJS {
   interface ProcessEnv {
      readonly PORT: string;
      readonly DB_URL: string;
      readonly DB_NAME: string;
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
