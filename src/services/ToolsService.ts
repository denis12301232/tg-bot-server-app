import ApiError from "../exeptions/ApiError";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";


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
}