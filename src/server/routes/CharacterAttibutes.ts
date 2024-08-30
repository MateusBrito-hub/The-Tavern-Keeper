import { Router } from 'express';
import { CharacterAttributesController } from '../controllers';

const router = Router();

router.post('/',
	CharacterAttributesController.createValidation,
	CharacterAttributesController.create);
router.delete('/:id',
	CharacterAttributesController.deleteByIdValidation,
	CharacterAttributesController.deteleById);
router.get('/',
	CharacterAttributesController.getAllValidation,
	CharacterAttributesController.getAll);
router.get('/:id',
	CharacterAttributesController.getByIdValidation,
	CharacterAttributesController.getById);

router.put('/:id',
	CharacterAttributesController.updateByIdValidation,
	CharacterAttributesController.updateById);

export { router };