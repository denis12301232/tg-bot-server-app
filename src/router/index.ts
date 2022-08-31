import { Router } from "express";
import { body } from "express-validator";
import Validate from "../libs/Validate";
import AssistanceController from "../controllers/AssistanceController";
import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import ToolsController from "../controllers/ToolsController"

const router: Router = Router();

//-------------------------------AuthController-------------------------------
router.get('/auth/refresh', AuthController.refresh);
router.get('/auth/activate/:link', AuthController.activate);
router.post('/auth/login', AuthController.login);
router.post('/auth/logout', AuthController.logout);
router.post('/auth/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 6, max: 20 }),
    body('name').isLength({ min: 1 }),
    AuthController.registration
);
router.get('/activate/:link', AuthController.activate);
router.post('/restore/password', body('email').isEmail(), AuthController.restorePassword);
router.post('/restore/password/new',
    body('password').isLength({ min: 6, max: 20 }),
    body('link').custom(Validate.required),
    AuthController.setNewRestoredPassword
);

//-------------------------------AssistanceController----------------------------
router.post('/assistance', AssistanceController.catchAssistaceForm);
router.post('/assistance/info', AssistanceController.sendAssistanceForm);
router.get('/assistance/list', AssistanceController.sendHumansList);
router.delete('/assistance/delete/human', AssistanceController.deleteHuman);
router.patch('/assistance/modify/form', AssistanceController.modifyAssistanceForm);
router.get('/assistance/sheet', AssistanceController.saveFormsToSheet)

//-------------------------------ToolsController----------------------------
router.patch('/tools/name', AuthMiddleware, ToolsController.setNewName);
router.patch('/tools/email', AuthMiddleware, body('email').isEmail(), ToolsController.setNewEmail);
router.patch('/tools/password',
    AuthMiddleware,
    body('oldPassword').custom(Validate.required),
    body('newPassword').isLength({ min: 6, max: 20 }),
    ToolsController.setNewPassword
);
router.post('/tools/google/service', AuthMiddleware, ToolsController.setGoogleServiceAccountSettings);

export default router;
