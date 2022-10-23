import { createTransport } from 'nodemailer'
import GoogleApi from '@/libs/GoogleApi'

export default class MailService {
   private static readonly transport = createTransport({
      service: 'gmail',
      auth: {
         user: GoogleApi.USER,
         pass: GoogleApi.APP_PASS,
      }
   });

   private static sendMail(to: string, subject: string, html: string) {
      return this.transport.sendMail({ from: GoogleApi.USER, to, subject, html });
   }

   static sendActivationMail(to: string, link: string) {
      const subject = `Активация аккаунта на сайте ${process.env.SERVER_URL}`;
      const html = `<div><h1>Для активации перейдите по ссылке:</h1><a href="${link}">${link}</a></div>`;

      return this.sendMail(to, subject, html)
   }

   static async sendRestoreMail(to: string, link: string) {
      const subject = `Восстановление пароля на сайте ${process.env.SERVER_URL}`;
      const html = `<div><h1>Для восстановления перейдите по ссылке:</h1><a href="${link}">${link}</a></div>`;

      return this.sendMail(to, subject, html);
   }
}