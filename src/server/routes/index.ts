import { Router } from 'express';
import { router as PlayerRoutes} from './Player';
import { router as CharacterRoutes } from './Character';
import { router as CharacterStatusRoutes } from './CharacterStatus';
import { router as CharacterSkillsRoutes } from './CharacterSkills';

const router = Router();

router.use('/player', PlayerRoutes);
router.use('/character', CharacterRoutes);
router.use('/characterStatus', CharacterStatusRoutes);
router.use('/characterSkills', CharacterSkillsRoutes);

export {router};