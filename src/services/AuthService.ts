import { v4 } from 'uuid'
import bcrypt from 'bcrypt'
import UserDto from '@/dtos/UserDto'
import MailService from './MailService'
import TokenService from './TokenService'
import UserModel from '@/models/UserModel'
import ApiError from '@/exeptions/ApiError'
import RestoreModel from '@/models/RestoreModel'


export default class AuthService {

   static async registration(email: string, password: string, name: string) {
      const candidate = await UserModel.findOne({ email }).lean();

      if (candidate) {
         throw ApiError.BadRequest(`This email address already taken`, ['email']);
      }

      const hashPassword: string = await bcrypt.hash(password, 5);
      const activationLink: string = v4();
      const user = await UserModel.create({ email, password: hashPassword, activationLink, name });

      await MailService.sendActivationMail(email, `${process.env.SERVER_URL}/api/auth/activate/${activationLink}`)
         .catch(e => console.log(e.message));

      const userDto = new UserDto(user);
      const tokens = TokenService.generateTokens({ ...userDto });

      await TokenService.saveToken(userDto._id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }

   static async activate(activationLink: string): Promise<void> {
      const user = await UserModel.findOne({ activationLink });

      if (!user) {
         throw ApiError.BadRequest(`Activation link is incorrect`);
      }

      user.isActivated = true;
      await user.save();
   }

   static async login(email: string, password: string) {
      const user = await UserModel.findOne({ email }).lean();

      if (!user) {
         throw ApiError.BadRequest(`Incorrect email`, ['email']);
      }

      const isPasswordsEqual = await bcrypt.compare(password, user.password);

      if (!isPasswordsEqual) {
         throw ApiError.BadRequest(`Incorrect password`, ['password']);
      }

      const userDto = new UserDto(user);
      const tokens = TokenService.generateTokens({ ...userDto });

      await TokenService.saveToken(userDto._id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }

   static async logout(refreshToken: string) {
      const token = await TokenService.removeToken(refreshToken);
      return token;
   }

   static async refresh(refreshToken: string) {

      if (!refreshToken) {
         throw ApiError.Unauthorized();
      }

      const userData = <UserDto>TokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await TokenService.findToken(refreshToken);

      if (!userData || !tokenFromDb) {
         throw ApiError.Unauthorized();
      }

      const user = await UserModel.findById(userData._id);

      if (!user) {
         throw ApiError.BadRequest(`User not found`);
      }

      const userDto = new UserDto(user);
      const tokens = TokenService.generateTokens({ ...userDto });

      await TokenService.saveToken(userDto._id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }

   static async restorePassword(email: string) {
      const link = v4();
      const user = await UserModel.findOne({ email }).lean();

      if (!user) {
         throw ApiError.BadRequest(`Incorrect email`, ['email']);
      }

      const restoreData = await RestoreModel.findOne({ user: user._id });
      const dateNow = new Date;

      if (restoreData) {
         restoreData.restoreLink = link;
         restoreData.createdAt = dateNow;
         await restoreData.save();
      } else {
         await RestoreModel.create({ user: user._id, restoreLink: link, createdAt: dateNow });
      }

      await MailService.sendRestoreMail(email, `${process.env.SERVER_URL}/restore?link=${link}`)
         .catch(e => {
           throw ApiError.BadRequest(`Message sending error`);
         });

      return { message: `Link was sent to email` };
   }

   static async setNewRestoredPassword(password: string, link: string) {
      const restoreData = await RestoreModel.findOne({ restoreLink: link });
      const date = new Date();

      if (!restoreData || (+date - +restoreData.createdAt > 6048e5)) {
         throw ApiError.BadRequest('Link expired');
      }

      const hashPassword: string = await bcrypt.hash(password, 5);
      const userData = await UserModel.findById(restoreData.user);

      if (!userData) {
         throw ApiError.BadRequest('Link expired');
      }

      userData.password = hashPassword;
      await userData.save();
      await restoreData.delete();

      return { message: 'Password was changed' }
   }
}