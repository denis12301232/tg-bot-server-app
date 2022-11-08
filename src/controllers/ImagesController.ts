import ApiError from '@/exeptions/ApiError';
import { google } from 'googleapis'
import { Request, Response, NextFunction } from 'express'
import ToolsModel from '@/models/ToolsModel'

export default class ImagesController {

   static async getImages(request: Request, response: Response, next: NextFunction) {
      try {
         const { pageToken } = request.query;

         if (typeof pageToken !== 'undefined' && typeof pageToken !== 'string') {
            return next(ApiError.BadRequest('Ошибка запроса!'));
         }

         const api = await ToolsModel.find().limit(1);
         const auth = new google.auth.GoogleAuth({
            credentials: {
               client_email: api[0].api.google.service.user,
               private_key: api[0].api.google.service.privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/drive']
         });
         const client = await auth.getClient();
         const driveService = google.drive({ version: 'v3', auth: client });
         const list = await driveService.files.list({
            q: `'${api[0].api.google.service.folderId}' in parents and trashed=false 
            and (mimeType=\'image/png\' or mimeType=\'image/jpeg\')`,
            pageSize: 20,
            pageToken
         });
         const nextPageToken = list?.data?.nextPageToken || undefined;
         const images = list.data.files?.map(item => {
            return { link: `https://drive.google.com/uc?export=view&id=${item.id}` }
         });

         return response.json({ images: images || [], pageToken: nextPageToken });
      } catch (e) {
         next(e);
      }
   }
}