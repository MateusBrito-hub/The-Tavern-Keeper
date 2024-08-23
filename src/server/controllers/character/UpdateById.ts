import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICharacter } from '../../database/models';
import { CharacterProvider } from '../../database/providers/character';

interface IParamsProps {
    id?: number,
}
interface IBodyProps extends Omit<ICharacter, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
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
	})),
	params: getSchema<IParamsProps>(yup.object().shape({
		id: yup.number().integer().required().moreThan(0)
	}))
}));

export const updateById = async (req: Request<IParamsProps,{},IBodyProps>, res: Response) => {
	if(!req.params.id) return res.status(StatusCodes.BAD_REQUEST).json({
		errors: {
			default: 'O parâmetro "id" precisa ser informado'
		}
	});

	const result = await CharacterProvider.updateById(req.params.id, req.body);
	if (result instanceof Error){
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors:{
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.NO_CONTENT).send();
};