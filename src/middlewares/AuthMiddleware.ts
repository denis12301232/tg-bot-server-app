import ApiError from "../exeptions/ApiError";
import TokenService from "../services/TokenService";
import { Request, Response, NextFunction } from "express";


export default function (request: Request, response: Response, next: NextFunction) {
   try {
      const authHeader = request.headers.authorization;

      if (!authHeader) {
         return next(ApiError.UnauthorizedError());
      }

      const accessToken = authHeader.split(' ')[1];

      if (!accessToken) {
         return next(ApiError.UnauthorizedError());
      }

      const userData = TokenService.validateAccessToken(accessToken);

      if (!userData) {
         return next(ApiError.UnauthorizedError());
      }

      request.user = userData;
      next();

   } catch (e) {
      return next(ApiError.UnauthorizedError());
   }
}