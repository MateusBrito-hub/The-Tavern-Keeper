import { Router } from 'express';
import { PlayerController } from '../controllers/players';

const router = Router();

router.post('/',
	PlayerController.createValidation,
	PlayerController.create);

export { router };