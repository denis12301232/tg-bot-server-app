import 'module-alias/register'
import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'
import router from '@/router/index'
import ErrorMiddleware from '@/middlewares/ErrorMiddleware'
import cookieParser from 'cookie-parser'
import { resolve } from 'path'
import { CreateRoot } from '@/libs/CreateRoot'
import { webhookCallback } from 'grammy'
import { bot } from '@/bot/bot'

config();

const PORT = process.env.PORT || '5000';
const app = express();

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL.split(' '), exposedHeaders: ['X-Total-Count'] }));
app.use(express.json());
app.use(cookieParser());
app.use('/bot', webhookCallback(bot, 'express'));
app.use('/api', router);
app.use('/', express.static(resolve(__dirname, '../public')));
app.get('*', (req, res) => res.sendFile(resolve(__dirname, '../public/index.html')));
app.use(ErrorMiddleware);


const start = async () => {
   try {
      await mongoose.connect(process.env.DB_URL, { dbName: process.env.DB_NAME })
         .then(() => console.log(`DB connected`));
      await CreateRoot();
      await bot.api.setWebhook(process.env.SERVER_DOMAIN + '/bot')
         .then(() => console.log('Bot started'));
      app.listen(PORT, (): void => console.log(`Server started on ${PORT} port`));
   } catch (e) {
      if (e instanceof Error) console.log(e.message);
      process.exit(1);
   }
}

start();