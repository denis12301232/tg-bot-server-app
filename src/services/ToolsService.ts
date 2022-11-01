import bcrypt from 'bcrypt'
import ApiError from '@/exeptions/ApiError'
import UserModel from '@/models/UserModel'
import ToolsModel from '@/models/ToolsModel'


export default class ToolsService {
   static async setNewName(id: string, name: string) {
      const user = await UserModel.findById(id);

      if (!user) throw ApiError.BadRequest(`Ошибка поиска!`);

      user.name = name;
      await user.save();

      return user;
   }

   static async setNewEmail(id: string, email: string) {
      const isUsed = await UserModel.findOne({ email });

      if (isUsed) throw ApiError.BadRequest(`Данный е-мэйл уже используется!`);

      const user = await UserModel.findById(id);

      if (!user) throw ApiError.BadRequest(`Ошибка поиска!`);

      user.email = email;
      await user.save();

      return user;
   }

   static async setNewPassword(id: string, newPassword: string, oldPassword: string) {
      const user = await UserModel.findById(id);

      if (!user) throw ApiError.BadRequest(`Ошибка поиска!`);

      const isPasswordsEqual = await bcrypt.compare(oldPassword, user.password);

      if (!isPasswordsEqual) {
         throw ApiError.BadRequest(`Неверный пароль!`, ['password']);
      }

      const hashPassword: string = await bcrypt.hash(newPassword, 5);
      user.password = hashPassword;
      await user.save();

      return user;
   }

   static async setGoogleServiceAccountSettings(serviceUser: string, servicePrivateKey: string, sheetId: string, folderId: string) {
      const api = await ToolsModel.find().limit(1);
      if (!api.length) {
         const response = await ToolsModel.create({
            api: {
               google: {
                  service: {
                     user: serviceUser,
                     privateKey: servicePrivateKey,
                     sheetId,
                     folderId
                  }
               }
            }
         });
         return response;
      } else {
         if(serviceUser) api[0]!.api!.google!.service!.user = serviceUser;
         if(servicePrivateKey) api[0]!.api!.google!.service!.privateKey = servicePrivateKey.replace(/\\n/g, '\n');
         if(sheetId) api[0]!.api!.google!.service!.sheetId = sheetId;
         if(folderId) api[0]!.api!.google!.service!.folderId = folderId;
         const response = await api[0].save();
         return response;
      }
   }

   static async updateRoles(_id: string, roles: string[]) {
      const user = await UserModel.findOne({ _id });

      if (!user) {
         throw ApiError.BadRequest('Пользователь не найден!');
      }
      user.roles = roles;
      await user.save();

      return { message: 'Обновлено' };
   }

   static async getUsers(_id: string) {
      const users = await UserModel.find({ _id: { $ne: _id } }, { _id: 1, email: 1, name: 1, roles: 1 });
      return users;
   }
}