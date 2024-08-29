import { Request, Response} from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { CharacterProvider } from '../../database/providers';

interface IQueryProps {
    page?: number,
    limit?: number,
    filter?: string
}

interface IParamsProps {
    player_name?: string,
}

export const getCharacterByPlayerNameValidation = validation((getSchema) => ({
	params: getSchema<IParamsProps>(yup.object().shape({
		player_name: yup.string().required()
	})),
	query: getSchema<IQueryProps>(yup.object().shape({
		page: yup.number().optional().moreThan(0),
		limit: yup.number().optional().moreThan(0),
		filter: yup.string().optional()
	}))
}));

export const getCharacterByPlayerName = async (req: Request<IParamsProps,{},{},IQueryProps>, res: Response) => {
	const result = await CharacterProvider.getCharacterByPlayerName(req.query.page || 1, req.query.limit || 7, req.query.filter || '', req.params.player_name || '');
	const count = await CharacterProvider.count(req.query.filter);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {default: result.message}
		});
	} else if (count instanceof Error){
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {default: count.message}
		});
	}

	res.setHeader('access-control-expose-headers', 'x-total-count');
	res.setHeader('x-total-count', count);

	return res.status(StatusCodes.OK).json(result);
};