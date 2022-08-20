export interface ITools {
   readonly api: {
      readonly google: {
         user: string,
         sheetId: string,
         clientId: string,
         clientSecret: string,
         redirectUrl: string,
         refreshToken: string,
      }
   }
}