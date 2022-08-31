export interface ITools {
   readonly api: {
      readonly google: {
         user: string,
         app_password: string,
         readonly service: {
            user: string,
            privateKey: string,
            sheetId: string,
         }
      }
   }
}

