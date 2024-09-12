import { Router } from 'express';
import { CharacterSavingThrowsController } from '../../controllers';

const router = Router();

router.post('/',
	CharacterSavingThrowsController.createValidation,
	CharacterSavingThrowsController.create);
router.delete('/:id',
	CharacterSavingThrowsController.deleteByIdValidation,
	CharacterSavingThrowsController.deteleById);
router.get('/:id',
	CharacterSavingThrowsController.getByIdValidation,
	CharacterSavingThrowsController.getById);

router.put('/:id',
	CharacterSavingThrowsController.updateByIdValidation,
	CharacterSavingThrowsController.updateById);

export { router };