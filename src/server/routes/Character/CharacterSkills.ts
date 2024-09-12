import { Router } from 'express';
import { CharacterSkillsController } from '../../controllers';

const router = Router();

router.post('/',
	CharacterSkillsController.createValidation,
	CharacterSkillsController.create);
router.delete('/:id',
	CharacterSkillsController.deleteByIdValidation,
	CharacterSkillsController.deteleById);
router.get('/:id',
	CharacterSkillsController.getByIdValidation,
	CharacterSkillsController.getById);

router.put('/:id',
	CharacterSkillsController.updateByIdValidation,
	CharacterSkillsController.updateById);

export { router };