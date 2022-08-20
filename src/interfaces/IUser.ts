export interface IUser {
   email: string,
   password: string,
   //username: string,
   isActivated: boolean,
   activationLink: string,
   isAdmin: boolean,
   name: string,
}