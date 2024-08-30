import { Router } from 'express';
import { CharacterLoreController } from '../controllers';

const router = Router();

router.post('/',
	CharacterLoreController.createValidation,
	CharacterLoreController.create);
router.delete('/:id',
	CharacterLoreController.deleteByIdValidation,
	CharacterLoreController.deteleById);
router.get('/',
	CharacterLoreController.getAllValidation,
	CharacterLoreController.getAll);
router.get('/:id',
	CharacterLoreController.getByIdValidation,
	CharacterLoreController.getById);

router.put('/:id',
	CharacterLoreController.updateByIdValidation,
	CharacterLoreController.updateById);

export { router };