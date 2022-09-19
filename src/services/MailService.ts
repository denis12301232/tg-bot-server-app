import nodemailer, { TransportOptions } from 'nodemailer'
import GoogleApi from '@/libs/GoogleApi'

export default class MailService {
   static readonly transport = nodemailer.createTransport(<TransportOptions>{
      service: 'gmail',
      auth: {
         user: GoogleApi.USER,
         pass: GoogleApi.APP_PASS,
      }
      // auth: {
      //    type: 'OAuth2',
      //    user: GoogleApi.USER,
      //    clientId: GoogleApi.CLIENT_ID,
      //    clientSecret: GoogleApi.CLIENT_SECRET,
      //    refreshToken: GoogleApi.REFRESH_TOKEN,
      // }
   });

   static async sendActivationMail(to: string, link: string): Promise<void> {
      await this.transport.sendMail({
         from: GoogleApi.USER,
         to,
         subject: `Активация аккаунта на сайте ${process.env.API_URL}`,
         text: '',
         html: `
                <div>
                    <h1>Для активации перейдите по ссылке:</h1>
                    <a href="${link}">${link}</a>
                </div>
                `
      });
   }

   static async sendRestoreMail(to: string, link: string): Promise<void> {
      await this.transport.sendMail({
         from: GoogleApi.USER,
         to,
         subject: `Восстановление пароля на сайте ${process.env.API_URL}`,
         text: '',
         html: `
                <div>
                    <h1>Для восстановления перейдите по ссылке:</h1>
                    <a href="${link}">${link}</a>
                </div>
                `
      });
   }
}