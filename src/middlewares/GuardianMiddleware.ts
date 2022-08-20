import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/IUser";
import ApiError from "../exeptions/ApiError";


export default function GuardianMiddleware(request: Request, response: Response, next: NextFunction) {

   if (!(<IUser>request.user).isAdmin) {
      return next(ApiError.AccessDenied());
   }

   next();
}