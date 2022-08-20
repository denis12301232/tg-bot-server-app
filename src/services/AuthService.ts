import { v4 } from "uuid";
import bcrypt from "bcrypt";
import UserDto from "../dtos/UserDto";
import MailService from "./MailService";
import TokenService from "./TokenService";
import UserModel from "../models/UserModel";
import ApiError from "../exeptions/ApiError";

export default class AuthService {

   static async registration(email: string, password: string, name: string) {

      const candidate = await UserModel.findOne({ email });

      if (candidate) {
         throw ApiError.BadRequest(`Пользователь с таким email уже существует!`, ['email']);
      }

      const hashPassword: string = await bcrypt.hash(password, 5);
      const activationLink: string = v4();
      const user = await UserModel.create({ email, password: hashPassword, activationLink, name });

      await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
         .catch(e => console.log(e.message));

      const userDto = new UserDto(user);
      const tokens = TokenService.generateTokens({ ...userDto });

      await TokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }

   static async activate(activationLink: string): Promise<void> {
      const user = await UserModel.findOne({ activationLink });

      if (!user) {
         throw ApiError.BadRequest(`Неккоректная ссылка активации!`);
      }

      user.isActivated = true;
      await user.save();
   }

   static async login(email: string, password: string) {
      const user = await UserModel.findOne({ email });

      if (!user) {
         throw ApiError.BadRequest(`Неверный email!`, ["email"]);
      }

      const isPasswordsEqual = await bcrypt.compare(password, user.password);

      if (!isPasswordsEqual) {
         throw ApiError.BadRequest(`Неверный пароль!`, ["password"]);
      }

      const userDto = new UserDto(user);
      const tokens = TokenService.generateTokens({ ...userDto });

      await TokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }

   static async logout(refreshToken: string) {
      const token = await TokenService.removeToken(refreshToken);
      return token;
   }

   static async refresh(refreshToken: string) {

      if (!refreshToken) {
         throw ApiError.UnauthorizedError();
      }

      const userData = <UserDto>TokenService.validateRefreshToken(refreshToken);
      const tokenFromDb = await TokenService.findToken(refreshToken);

      if (!userData || !tokenFromDb) {
         throw ApiError.UnauthorizedError();
      }

      const user = await UserModel.findById(userData.id);

      if (!user) {
         throw ApiError.BadRequest(`Пользователь не найден!`);
      }

      const userDto = new UserDto(user);
      const tokens = TokenService.generateTokens({ ...userDto });

      await TokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
   }
}