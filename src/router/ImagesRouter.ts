import ImagesController from '@/controllers/ImagesController'
import { Router } from 'express'


const router: Router = Router();

router.get('/', ImagesController.getImages)

export default router;