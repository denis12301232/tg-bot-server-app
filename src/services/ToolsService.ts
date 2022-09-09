import ApiError from "../exeptions/ApiError";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import ToolsModel from "../models/ToolsModel";


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
         throw ApiError.BadRequest(`Неверный пароль!`, ["password"]);
      }

      const hashPassword: string = await bcrypt.hash(newPassword, 5);
      user.password = hashPassword;
      await user.save();

      return user;
   }

   static async setGoogleServiceAccountSettings(serviceUser: string, servicePrivateKey: string, sheetId: string) {
      const api = await ToolsModel.find().limit(1);
      if (!api.length) {
         const response = await ToolsModel.create({
            api: {
               google: {
                  service: {
                     user: serviceUser,
                     privateKey: servicePrivateKey,
                     sheetId: sheetId,
                  }
               }
            }
         });
         return response;
      } else {
         api[0]!.api!.google!.service!.user = serviceUser;
         api[0]!.api!.google!.service!.privateKey = servicePrivateKey.replace(/\\n/g, '\n');
         api[0]!.api!.google!.service!.sheetId = sheetId;
         const response = await api[0].save();
         return response;
      }
   }

   static async giveAdminRights(email: string) {
      const user = await UserModel.findOne({ email });

      if (!user) {
         throw ApiError.BadRequest('Пользователь не найден!');
      }

      if (user.roles.includes('admin')) {
         throw ApiError.BadRequest('Пользователь уже администратор!');
      }

      user.roles.push('admin');
      await user.save();

      return { message: `Пользователь ${user.email} теперь администратор` };
   }

   static async takeAdminRights(email: string) {
      const user = await UserModel.findOne({ email });

      if (!user) {
         throw ApiError.BadRequest('Пользователь не найден!');
      }

      if (!user.roles.includes('admin')) {
         throw ApiError.BadRequest('Пользователь и так не администратор!');
      }

      user.roles = user.roles.filter((item) => item !== 'admin');
      await user.save();

      return { message: `Пользователь ${user.email} теперь не администратор` };
   }
}