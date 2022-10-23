import { Request, Response, NextFunction } from 'express'
import { IUser } from '@/interfaces/interfaces'
import ApiError from '@/exeptions/ApiError'


export default function RoleMiddleware(roles: Array<string>) {
   return function (request: Request, response: Response, next: NextFunction) {
      try {
         for (const role of roles) {
            if ((<IUser>request.user).roles.includes(role)) return next();
         }
         throw ApiError.Forbidden();
      } catch (e) {
         return next(e);
      }
   }
}