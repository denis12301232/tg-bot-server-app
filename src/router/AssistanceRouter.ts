import { Router } from 'express'
import AssistanceController from '@/controllers/AssistanceController'
import AuthMiddleware from '@/middlewares/AuthMiddleware'
import RoleMiddleware from '@/middlewares/RoleMiddleware'


const router: Router = Router();

router.post('/', AssistanceController.catchAssistaceForm);
router.post('/info', AuthMiddleware, RoleMiddleware(['admin']), AssistanceController.sendAssistanceForm);
router.get('/list', AuthMiddleware, RoleMiddleware(['admin']), AssistanceController.sendHumansList);
router.delete('/delete/human', AuthMiddleware, RoleMiddleware(['admin']), AssistanceController.deleteHuman);
router.patch('/modify/form', AuthMiddleware, RoleMiddleware(['admin']), AssistanceController.modifyAssistanceForm);
router.post('/sheet', AuthMiddleware, RoleMiddleware(['admin']), AssistanceController.saveFormsToSheet);
router.get('/id', AuthMiddleware, RoleMiddleware(['admin']), AssistanceController.getFormById);

export default router;