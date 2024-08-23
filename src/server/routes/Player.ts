import { Router } from 'express';
import { PlayerController } from '../controllers';

const router = Router();

router.post('/',
	PlayerController.createValidation,
	PlayerController.create);
router.delete('/:id',
	PlayerController.deleteByIdValidation,
	PlayerController.deteleById);
router.get('/',
	PlayerController.getAllValidation,
	PlayerController.getAll);
router.get('/:id',
	PlayerController.getByIdValidation,
	PlayerController.getById);
router.put('/:id',
	PlayerController.updateByIdValidation,
	PlayerController.updateById);

export { router };