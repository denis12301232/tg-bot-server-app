import 'module-alias/register'
import express from 'express'
import mongoose, { ConnectOptions } from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'
import router from '@/router/index'
import ErrorMiddleware from '@/middlewares/ErrorMiddleware'
import cookieParser from 'cookie-parser'
import { resolve } from 'path'


config();
const PORT = process.env.PORT || '5000';
const app = express();

app.use(cors({
   credentials: true,
   origin: process.env.CLIENT_URL,
   exposedHeaders: ['X-Total-Count'],
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use('/', express.static(resolve(__dirname, '../public')));
app.get('*', (req, res) => res.sendFile(resolve(__dirname, '../public/index.html')));
app.use(ErrorMiddleware);


const start = async (): Promise<void> => {
   try {

      await mongoose.connect(process.env.DB_URL, <ConnectOptions>{ useUnifiedTopology: true, useNewUrlParser: true });
      app.listen(PORT, (): void => console.log(`Server started on ${PORT} port`));

   } catch (e) {
      if (e instanceof Error) console.log(e.message);
   }
}

start();
