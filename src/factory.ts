import { Express, json, static as expressStatic } from 'express'
import { resolve } from 'path'
import { webhookCallback } from 'grammy'
import { bot } from '@/bot/bot'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { router_v1 } from '@/router/v1'
import ErrorMiddleware from '@/middlewares/ErrorMiddleware'


export function factory(app: Express) {
   const ORIGIN = process.env.CLIENT_URL ? process.env.CLIENT_URL.split(' '): '';

   app.use(cors({ credentials: true, origin: ORIGIN, exposedHeaders: ['X-Total-Count'] }));
   app.use(json());
   app.use(cookieParser());
   app.use('/bot', webhookCallback(bot, 'express'));
   app.use('/api/v1', router_v1);
   app.use('/', expressStatic(resolve(__dirname, '../public')));
   app.get('*', (req, res) => res.sendFile(resolve(__dirname, '../public/index.html')));
   app.use(ErrorMiddleware);
}