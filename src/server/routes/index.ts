import { Router } from 'express';
import { router as PlayerRoutes} from './Player';

const router = Router();

router.use('/player', PlayerRoutes);

export {router};