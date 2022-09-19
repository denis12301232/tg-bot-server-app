import { Router } from "express"
import { body } from "express-validator"
import Validate from "@/libs/Validate"
import AuthMiddleware from "@/middlewares/AuthMiddleware"
import RoleMiddleware from "@/middlewares/RoleMiddleware"
import ToolsController from "@/controllers/ToolsController"

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
router.post('/giverights', AuthMiddleware, RoleMiddleware(['admin']), ToolsController.giveAdminRights);
router.post('/takerights', AuthMiddleware, RoleMiddleware(['admin']), ToolsController.takeAdminRights);
router.get('/users', AuthMiddleware, RoleMiddleware(['admin']), ToolsController.getUsers);


export default router;