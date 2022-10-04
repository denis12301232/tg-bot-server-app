import { Router } from 'express'
import { body } from 'express-validator'
import Validate from '@/libs/Validate'
import AuthController from '@/controllers/AuthController'


const router: Router = Router();

router.get('/refresh', AuthController.refresh);
router.get('/activate/:link', AuthController.activate);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/registration',
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

export default router;