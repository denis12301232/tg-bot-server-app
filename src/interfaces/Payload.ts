export interface Payload {
   readonly email: string;
   readonly id: string;
   readonly isActivated: boolean;
   readonly isAdmin: boolean;
   readonly name: string;
   readonly iat: number,
   readonly exp: number,
}