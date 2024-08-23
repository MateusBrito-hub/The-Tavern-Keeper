import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { IPlayer } from '../../database/models';
import { PlayerProvider } from '../../database/providers/player';

interface IBodyProps extends Omit<IPlayer, 'id'> { }

export const createValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		name: yup.string().required(),
		surname: yup.string().required(),
		email: yup.string().required(),
		password: yup.string().required()
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await PlayerProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};