import ApiError from "../exeptions/ApiError";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express"
import { Payload } from "../interfaces/Payload";
import ToolsService from "../services/ToolsService";
import UserDto from "../dtos/UserDto";
import UserModel from "../models/UserModel";


export default class ToolsController {
   static async setNewName(request: Request, response: Response, next: NextFunction) {
      try {
         const { name } = request.body;
         const { id } = <Payload>request.user;
         if (!name) next(ApiError.BadRequest('Имя не может быть пустым!'));

         const user = await ToolsService.setNewName(id, name);

         return response.json({ user: new UserDto(user) });
      } catch (e) {
         next(e);
      }
   }

   static async setNewEmail(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации е-мэйла!', errors.array()));
         }

         const { email } = request.body;
         const { id } = <Payload>request.user;
         const user = await ToolsService.setNewEmail(id, email);

         return response.json({ user: new UserDto(user) });
      } catch (e) {
         next(e);
      }
   }

   static async setNewPassword(request: Request, response: Response, next: NextFunction) {
      try {
         const errors = validationResult(request);

         if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации пароля!', errors.array()));
         }

         const { newPassword, oldPassword } = request.body;
         const { id } = <Payload>request.user;
         const user = await ToolsService.setNewPassword(id, newPassword, oldPassword);

         return response.json({ user: new UserDto(user) });
      } catch (e) {
         next(e);
      }
   }

   static async setGoogleServiceAccountSettings(request: Request, response: Response, next: NextFunction) {
      try {
         const { serviceUser, servicePrivateKey, sheetId } = request.body;

         if (!serviceUser || !servicePrivateKey || !sheetId) {
            return next(ApiError.BadRequest('Неверный запрос'));
         }

         const result = await ToolsService.setGoogleServiceAccountSettings(serviceUser, servicePrivateKey, sheetId);

         return response.json({ message: 'Сохранено!' });

      } catch (e) {
         next(e);
      }
   }

   static async getUsers(request: Request, response: Response, next: NextFunction) {
      try {
         const users = await UserModel.find();

         return response.json(users);

      } catch (e) {
         next(e);
      }
   }

   static async giveAdminRights(request: Request, response: Response, next: NextFunction) {
      try {
         const { email } = request.body;

         if (!email) {
            return next(ApiError.BadRequest('Неверный запрос'));
         }

         const message = await ToolsService.giveAdminRights(email);

         return response.json(message);

      } catch (e) {
         next(e);
      }
   }

   static async takeAdminRights(request: Request, response: Response, next: NextFunction) {
      try {
         const { email } = request.body;

         if (!email) {
            return next(ApiError.BadRequest('Неверный запрос'));
         }

         const message = await ToolsService.takeAdminRights(email);

         return response.json(message);
         
      } catch (e) {
         next(e);
      }
   }
}