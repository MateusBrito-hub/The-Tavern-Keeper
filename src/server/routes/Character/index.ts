import { Router } from 'express';
import { router as CharacterRoutes } from './Character';
import { router as CharacterStatusRoutes } from './CharacterStatus';
import { router as CharacterSkillsRoutes } from './CharacterSkills';
import { router as CharacterSavingThrowsRoutes } from './CharacterSavingThrows';
import { router as CharacterAttributesRoutes } from './CharacterAttibutes';
import { router as CharacterLoreRoutes } from './CharacterLore';

const router = Router();

router.use('/', CharacterRoutes);
router.use('/status', CharacterStatusRoutes);
router.use('/skills', CharacterSkillsRoutes);
router.use('/savingThrows', CharacterSavingThrowsRoutes);
router.use('/attributes', CharacterAttributesRoutes);
router.use('/lore', CharacterLoreRoutes);

export { router };