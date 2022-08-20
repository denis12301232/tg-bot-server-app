import ApiError from "../exeptions/ApiError";
import AuthService from "../services/AuthService";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express"
import { Payload } from "../interfaces/Payload";
import ToolsService from "../services/ToolsService";
import UserDto from "../dtos/UserDto";


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
         
         return response.json({user: new UserDto(user)});
      } catch (e) {
         next(e);
      }
   }
}