import ApiError from "@/exeptions/ApiError"
import AuthService from "@/services/AuthService"
import { validationResult } from "express-validator"
import { Request, Response, NextFunction } from "express"


export default class AuthController {

   static async registration(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации логина или пароля', errors.array()));
         }

         const { email, password, name } = request.body;
         const userData = await AuthService.registration(email.toLowerCase(), password, name);

         response.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "lax",
         });

         return response.json(userData);
      } catch (e) {
         next(e);
      }
   }

   static async login(request: Request, response: Response, next: NextFunction) {
      try {
         const { email, password } = request.body;
         const userData = await AuthService.login(email.toLowerCase(), password);

         response.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
         });

         return response.json(userData);
      } catch (e) {
         next(e);
      }
   }

   static async logout(request: Request, response: Response, next: NextFunction) {
      try {
         const { refreshToken } = request.cookies;
         const token = await AuthService.logout(refreshToken);

         response.clearCookie('refreshToken');

         return response.status(200).json(token);
      } catch (e) {
         next(e);
      }
   }

   static async activate(request: Request, response: Response, next: NextFunction) {
      try {
         const activationLink = request.params.link;
         await AuthService.activate(activationLink);

         return response.redirect(<string>process.env.CLIENT_URL);
      } catch (e) {
         next(e);
      }
   }

   static async refresh(request: Request, response: Response, next: NextFunction) {
      try {
         const { refreshToken } = request.cookies;
         const userData = await AuthService.refresh(refreshToken);

         response.cookie('refreshToken', userData.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
         });

         return response.json(userData);
      } catch (e) {
         next(e);
      }
   }

   static async restorePassword(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации!', errors.array()));
         }

         const { email } = request.body;
         const message = await AuthService.restorePassword(email);

         return response.json({ message });

      } catch (e) {
         next(e);
      }
   }

   static async setNewRestoredPassword(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации!', errors.array()));
         }

         const { password, link } = request.body;
         const message = await AuthService.setNewRestoredPassword(password, link);

         return response.json({ message });

      } catch (e) {
         next(e);
      }
   }
}