import ApiError from '@/exeptions/ApiError'
import { validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'
import { Payload } from '@/interfaces/interfaces'
import ToolsService from '@/services/ToolsService'
import UserDto from '@/dtos/UserDto'


export default class ToolsController {

   static async setNewName(request: Request, response: Response, next: NextFunction) {
      try {
         const { name } = request.body;
         const { _id } = <Payload>request.user;
         if (!name) next(ApiError.BadRequest('Имя не может быть пустым!'));

         const user = await ToolsService.setNewName(_id, name);

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
         const { _id } = <Payload>request.user;
         const user = await ToolsService.setNewEmail(_id, email);

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
         const { _id } = <Payload>request.user;
         const user = await ToolsService.setNewPassword(_id, newPassword, oldPassword);

         return response.json({ user: new UserDto(user) });
      } catch (e) {
         next(e);
      }
   }

   static async setGoogleServiceAccountSettings(request: Request, response: Response, next: NextFunction) {
      try {
         const { serviceUser, servicePrivateKey, sheetId, folderId } = request.body;

         if (!serviceUser && !servicePrivateKey && !sheetId && !folderId) {
            return next(ApiError.BadRequest('Неверный запрос'));
         }
         const result = await ToolsService.setGoogleServiceAccountSettings(serviceUser, servicePrivateKey, sheetId, folderId);
         return response.json({ message: 'Сохранено!' });
      } catch (e) {
         next(e);
      }
   }

   static async getUsers(request: Request, response: Response, next: NextFunction) {
      try {
         const { _id } = request.query;

         if (!(typeof _id === 'string')) {
            return next(ApiError.BadRequest('Неверный запрос'));
         }
         const users = await ToolsService.getUsers(_id);
         return response.json(users);
      } catch (e) {
         next(e);
      }
   }

   static async updateRoles(request: Request, response: Response, next: NextFunction) {
      try {
         const { _id, roles } = request.body;

         if (!_id || !roles.length || _id === (<Payload>request.user)?._id) {
            return next(ApiError.BadRequest('Неверный запрос'));
         }
         const result = await ToolsService.updateRoles(_id, roles);
         return response.json(result);
      } catch (e) {
         next(e);
      }
   }

}