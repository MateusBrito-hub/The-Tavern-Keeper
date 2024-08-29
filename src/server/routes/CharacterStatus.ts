import { Router } from 'express';
import { CharacterStatusController } from '../controllers';

const router = Router();

router.post('/',
	CharacterStatusController.createValidation,
	CharacterStatusController.create);
router.delete('/:id',
	CharacterStatusController.deleteByIdValidation,
	CharacterStatusController.deteleById);
router.get('/',
	CharacterStatusController.getAllValidation,
	CharacterStatusController.getAll);
router.get('/:id',
	CharacterStatusController.getByIdValidation,
	CharacterStatusController.getById);

router.put('/:id',
	CharacterStatusController.updateByIdValidation,
	CharacterStatusController.updateById);

export { router };