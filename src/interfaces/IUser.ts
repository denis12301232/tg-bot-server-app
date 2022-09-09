export interface IUser {
   email: string,
   password: string,
   name: string,
   isActivated: boolean,
   activationLink: string,
   roles: string[],
}