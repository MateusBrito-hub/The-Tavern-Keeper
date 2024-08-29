import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICharacterStatus } from '../../database/models';
import { CharacterStatusProvider } from '../../database/providers';

interface IBodyProps extends Omit<ICharacterStatus, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		armorClass: yup.number().required().moreThan(0),
		initiative: yup.number().required().moreThan(0),
		speed: yup.number().required().moreThan(0),
		hpMax: yup.number().required().moreThan(0),
		character_id: yup.number().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await CharacterStatusProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};