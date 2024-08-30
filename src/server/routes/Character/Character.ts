import { Router } from 'express';
import { CharacterController } from '../../controllers';

const router = Router();

router.post('/',
	CharacterController.createValidation,
	CharacterController.create);
router.delete('/:id',
	CharacterController.deleteByIdValidation,
	CharacterController.deteleById);
router.get('/',
	CharacterController.getAllValidation,
	CharacterController.getAll);
	
router.get('/player/:player_name',
	CharacterController.getCharacterByPlayerNameValidation,
	CharacterController.getCharacterByPlayerName);
router.get('/:id',
	CharacterController.getByIdValidation,
	CharacterController.getById);

router.put('/:id',
	CharacterController.updateByIdValidation,
	CharacterController.updateById);

export { router };