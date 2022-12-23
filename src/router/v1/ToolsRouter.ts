import { Router } from 'express'
import { body } from 'express-validator'
import Validate from '@/libs/Validate'
import AuthMiddleware from '@/middlewares/AuthMiddleware'
import RoleMiddleware from '@/middlewares/RoleMiddleware'
import ToolsController from '@/controllers/ToolsController'

const router: Router = Router();

router.patch('/name', AuthMiddleware, ToolsController.setNewName);
router.patch('/email', AuthMiddleware, body('email').isEmail(), ToolsController.setNewEmail);
router.patch('/password',
    AuthMiddleware,
    body('oldPassword').custom(Validate.required),
    body('newPassword').isLength({ min: 6, max: 20 }),
    ToolsController.setNewPassword
);
router.post('/google/service', AuthMiddleware, RoleMiddleware(['admin']), ToolsController.setGoogleServiceAccountSettings);
router.get('/users', AuthMiddleware, RoleMiddleware(['admin']), ToolsController.getUsers);
router.post('/setroles', AuthMiddleware, RoleMiddleware(['admin']), ToolsController.updateRoles);


export default router;