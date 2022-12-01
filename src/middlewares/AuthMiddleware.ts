import ApiError from '@/exeptions/ApiError'
import TokenService from '@/services/TokenService'
import { Request, Response, NextFunction } from 'express'


export default function (request: Request, response: Response, next: NextFunction) {
   try {
      const authHeader = request.headers.authorization;

      if (!authHeader || !authHeader.split(' ')[1]) {
         return next(ApiError.Unauthorized());
      }

      const accessToken = authHeader.split(' ')[1];
      const userData = TokenService.validateAccessToken(accessToken);

      if (!userData) {
         return next(ApiError.Unauthorized());
      }

      request.user = userData;
      next();

   } catch (e) {
      return next(ApiError.Unauthorized());
   }
}