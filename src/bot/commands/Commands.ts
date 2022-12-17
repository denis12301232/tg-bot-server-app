import { CommandContext, Context, HearsContext } from 'grammy'
import { MyContext } from '../types';
import Keyboards from '@/bot/keyboards/Keyboards'
import { exitAllConversations } from '@/bot/util/exitAllConversations'

export default class Commands {
   static async start(ctx: CommandContext<MyContext>) {
      try {
         await exitAllConversations(ctx);
         return ctx.reply(`Привет, ${ctx.msg.from?.first_name || 'Аноним'}! Вас приветствует бот-помощник.`, {
            reply_markup: {
               keyboard: Keyboards.start_keyboard.build(),
               resize_keyboard: true,
            }
         });
      } catch (e) {
         if (e instanceof Error) return ctx.reply(e.message);
      }
   }

   static howToUse(ctx: HearsContext<MyContext>) {
      const text = `Чтобы оставить заявку на получение гуманитарной помощи, выберите один из вариантов:\n
1. "Внести данные" - здесь вам предстоит последовательно ответить на список вопросов.
2. "Заполнить форму" - более удобный способ заполнения заявки (Может не работать на некоторых устройстах).
Если не работает - используйте вариант №1`;
      return ctx.reply(text);
   }

   static async enterData(ctx: HearsContext<MyContext>) {
      return ctx.conversation.enter('fillForm');
   }

   static async renterForm(ctx: HearsContext<MyContext>) {
      try {
         const isActive = await ctx.conversation.active();
         if (isActive.fillForm) return ctx.conversation.reenter('fillForm');
      } catch (e) {
         if (e instanceof Error) return ctx.reply(e.message);
      }
   }

   static async saveWebAppForm(ctx: MyContext) {
      if(ctx?.msg?.web_app_data?.data){
         const data = JSON.parse(ctx?.msg?.web_app_data?.data);
         return ctx.reply('Заявка отправлена!');
      }
   }
}