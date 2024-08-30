import { Router } from 'express';
import { router as PlayerRoutes} from './Player';
import { router as CharacterRoutes} from './Character';


const router = Router();

router.use('/player', PlayerRoutes);
router.use('/character', CharacterRoutes);

export {router};