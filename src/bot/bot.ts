import { Bot, session, Context, } from 'grammy'
import Commands from '@/bot/commands/Commands'
import { MyContext } from './types'
import BotApi from '@/bot/api/BotApi'
import { conversations, createConversation } from '@grammyjs/conversations'
import { fillForm } from '@/bot/conversations/fillForm'


export const bot = new Bot<MyContext>(process.env.BOT_TOKEN);

async function initBot() {
   try {
      await bot.api.setMyCommands([
         { command: 'start', description: 'Начать сначала' },
      ]);
      bot.use(session({ initial: BotApi.initial, getSessionKey: BotApi.getSessionKey }))
      bot.use(conversations());
      bot.use(createConversation(fillForm));

      bot.command('start', Commands.start);
      bot.hears('Как пользоваться', Commands.howToUse);
      bot.hears('Внести данные', Commands.enterData);
      bot.hears('Изменить', Commands.renterForm);
      bot.on('message:web_app_data', Commands.saveWebAppForm);
   } catch (e) {
      if (e instanceof Error) console.log(e.message);
   }
}

initBot();



