import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICharacterLore } from '../../database/models';
import { CharacterLoreProvider } from '../../database/providers';

interface IBodyProps extends Omit<ICharacterLore, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		personalityTraits: yup.string().required(),
		ideals: yup.string().required(),
		bonds: yup.string().required(),
		flaws: yup.string().required(),
		lore: yup.string().required(),
		character_id: yup.number().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await CharacterLoreProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};