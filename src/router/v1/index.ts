import { Router } from 'express'
import AuthRouter from './AuthRouter'
import ToolsRouter from './ToolsRouter'
import AssistanseRouter from './AssistanceRouter'
import ImagesRouter from './ImagesRouter'


const router_v1 = Router();

router_v1.use('/auth', AuthRouter);
router_v1.use('/tools', ToolsRouter);
router_v1.use('/assistance', AssistanseRouter);
router_v1.use('/images', ImagesRouter);

export { router_v1 };