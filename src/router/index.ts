import { Router } from 'express'
import AuthRouter from './AuthRouter'
import ToolsRouter from './ToolsRouter'
import AssistanseRouter from './AssistanceRouter'


const router: Router = Router();

router.use('/auth', AuthRouter);
router.use('/tools', ToolsRouter);
router.use('/assistance', AssistanseRouter);

export default router;