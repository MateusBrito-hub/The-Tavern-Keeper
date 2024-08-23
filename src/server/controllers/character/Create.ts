import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICharacter } from '../../database/models';
import { CharacterProvider } from '../../database/providers/character';

interface IBodyProps extends Omit<ICharacter, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		name: yup.string().required(),
		classLevel: yup.string().required(),
		race: yup.string().required(),
		background: yup.string().required(),
		alignment: yup.string().required(),
		age: yup.number().required(),
		height: yup.number().required(),
		weight: yup.number().required(),
		eyes: yup.string().required(),
		skin: yup.string().required(),
		hair: yup.string().required(),
		player_Id: yup.number().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await CharacterProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};