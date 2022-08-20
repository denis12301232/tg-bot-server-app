declare namespace Express {
   export interface Request {
      user?: string | import("jsonwebtoken").JwtPayload;
   }
}

declare namespace NodeJS {
   interface ProcessEnv {
      readonly PORT: string,
      readonly DB_URL: string,
      readonly API_URL: string,
      readonly CLIENT_URL: string,
      readonly JWT_ACCESS_SECRET: string,
      readonly JWT_REFRESH_SECRET: string,
      readonly GOOGLE_USER: string,
      readonly GOOGLE_CLIENT_ID: string,
      readonly GOOGLE_CLIENT_SECRET: string,
      readonly GOOGLE_REDIRECT_URL: string,
      readonly GOOGLE_REFRESH_TOKEN: string,
   }
}
