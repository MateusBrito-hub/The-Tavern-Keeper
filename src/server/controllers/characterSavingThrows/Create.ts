import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICharacterSavingThrows } from '../../database/models';
import { CharacterSavingThrowsProvider } from '../../database/providers';

interface IBodyProps extends Omit<ICharacterSavingThrows, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		strength: yup.number().required(),
		dexterity: yup.number().required(),
		constituition: yup.number().required(),
		intelligence: yup.number().required(),
		wisdom: yup.number().required(),
		charisma: yup.number().required(),
		character_id: yup.number().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await CharacterSavingThrowsProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};