require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
import 'module-alias/register'
import express from 'express'
import mongoose from 'mongoose'
import { bot } from '@/bot/bot'
import { CreateRoot } from '@/libs/CreateRoot'
import { factory } from './factory'

const PORT = process.env.PORT || '5000';
const app = express();
factory(app);

const start = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_NAME })
         .then(() => console.log(`DB connected`));
      await CreateRoot();
      await bot.api.setWebhook(process.env.SERVER_DOMAIN + '/bot')
         .then(() => console.log('Bot started'))
      app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
   } catch (e) {
      if (e instanceof Error) console.log(e.message);
      process.exit(1);
   }
}

start();
