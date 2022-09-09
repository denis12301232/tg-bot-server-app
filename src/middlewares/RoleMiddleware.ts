import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/IUser";
import ApiError from "../exeptions/ApiError";


export default function RoleMiddleware(roles: Array<string>) {
   return function (request: Request, response: Response, next: NextFunction) {
      try {
         for (const role of roles) {
            if ((<IUser>request.user).roles.includes(role)) return next();
         }
         throw ApiError.AccessDenied();
      } catch (e) {
         return next(e);
      }
   }
}