import bcrypt from 'bcrypt'
import ApiError from '@/exeptions/ApiError'
import UserModel from '@/models/UserModel'
import ToolsModel from '@/models/ToolsModel'


export default class ToolsService {
   static async setNewName(id: string, name: string) {
      const user = await UserModel.findById(id);

      if (!user) throw ApiError.BadRequest(`User not found`);

      user.name = name;
      await user.save();

      return user;
   }

   static async setNewEmail(id: string, email: string) {
      const isUsed = await UserModel.findOne({ email });

      if (isUsed) throw ApiError.BadRequest(`This email address already taken`);

      const user = await UserModel.findById(id);

      if (!user || user.email === 'root@root.root') {
         throw ApiError.BadRequest(`User not found`, user ? ['root']: undefined);
      }

      user.email = email;
      await user.save();

      return user;
   }

   static async setNewPassword(id: string, newPassword: string, oldPassword: string) {
      const user = await UserModel.findById(id);

      if (!user) throw ApiError.BadRequest(`User not found`);

      const isPasswordsEqual = await bcrypt.compare(oldPassword, user.password);

      if (!isPasswordsEqual) {
         throw ApiError.BadRequest(`Password is incorrect`, ['password']);
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
                  service: { user: serviceUser, privateKey: servicePrivateKey, sheetId, folderId }
               }
            }
         });
         return response;
      } else {
         if (serviceUser) api[0]!.api!.google!.service!.user = serviceUser;
         if (servicePrivateKey) api[0]!.api!.google!.service!.privateKey = servicePrivateKey.replace(/\\n/g, '\n');
         if (sheetId) api[0]!.api!.google!.service!.sheetId = sheetId;
         if (folderId) api[0]!.api!.google!.service!.folderId = folderId;
         const response = await api[0].save();
         return response;
      }
   }

   static async updateRoles(_id: string, roles: string[]) {
      const user = await UserModel.findOne({ _id });

      if (!user || user.email === 'root@root.root') {
         throw ApiError.BadRequest('User not found');
      }
      user.roles = roles;
      await user.save();

      return { message: 'Updated' };
   }

   static async getUsers(_id: string) {
      const users = await UserModel.find({
         _id: { $ne: _id }, email: { $ne: 'root@root.root' }
      }, {
         _id: 1, email: 1, name: 1, roles: 1
      }).lean();
      return users;
   }
}