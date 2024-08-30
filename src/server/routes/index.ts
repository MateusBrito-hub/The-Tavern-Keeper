import { Router } from 'express';
import { router as PlayerRoutes} from './Player';
import { router as CharacterRoutes } from './Character';
import { router as CharacterStatusRoutes } from './CharacterStatus';
import { router as CharacterSkillsRoutes } from './CharacterSkills';
import { router as CharacterSavingThrowsRoutes } from './CharacterSavingThrows';
import { router as CharacterAttributesRoutes } from './CharacterAttibutes';
import { router as CharacterLoreRoutes } from './CharacterLore';

const router = Router();

router.use('/player', PlayerRoutes);
router.use('/character', CharacterRoutes);
router.use('/characterStatus', CharacterStatusRoutes);
router.use('/characterSkills', CharacterSkillsRoutes);
router.use('/CharacterSavingThrows', CharacterSavingThrowsRoutes);
router.use('/characterAttributes', CharacterAttributesRoutes);
router.use('/characterLore', CharacterLoreRoutes);

export {router};