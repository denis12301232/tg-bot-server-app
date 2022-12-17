import { Keyboard, InlineKeyboard } from 'grammy'
import { config } from 'dotenv'

config();

export default class Keyboards {
   static readonly start_keyboard = new Keyboard()
      .text('Как пользоваться').row()
      .text('Внести данные').webApp('Заполнить форму', process.env.SERVER_DOMAIN).resized().oneTime();

   static readonly save_keyboard = new Keyboard()
      .text('Сохранить').text('Изменить').row()
      .text('Вернутся назад').oneTime().resized();

   static readonly district_markup = new InlineKeyboard()
      .text('Индустриальный').text('Киевский').text('Московский').row()
      .text('Немышлянский').text('Новобаварский').text('Основянский').row()
      .text('Слободской').text('Холодногорский').text('Шевченковский');

   static readonly district_keyboard = new Keyboard()
      .text('Индустриальный').text('Киевский').text('Московский').row()
      .text('Немышлянский').text('Новобаварский').text('Основянский').row()
      .text('Слободской').text('Холодногорский').text('Шевченковский').resized().oneTime();

   static readonly yes_no_markup = new InlineKeyboard().text('Да').text('Нет');
   static readonly yes_no_keyboard = new Keyboard().text('Да').text('Нет').resized().oneTime();
}