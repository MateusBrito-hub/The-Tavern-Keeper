import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICharacterSkills } from '../../database/models';
import { CharacterSkillsProvider } from '../../database/providers';

interface IParamsProps {
    id?: number,
}
interface IBodyProps extends Omit<ICharacterSkills, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
	body: getSchema<IBodyProps>(yup.object().shape({
		acrobatics: yup.number().required(),
		animalHandling: yup.number().required(),
		arcana: yup.number().required(),
		athletics: yup.number().required(),
		deception: yup.number().required(),
		history: yup.number().required(),
		insight: yup.number().required(),
		intimidation: yup.number().required(),
		investigation: yup.number().required(),
		medicine: yup.number().required(),
		nature: yup.number().required(),
		perception: yup.number().required(),
		performance: yup.number().required(),
		persuasion: yup.number().required(),
		religion: yup.number().required(),
		sleightOfHand: yup.number().required(),
		stealth: yup.number().required(),
		survival: yup.number().required(),
		character_id: yup.number().required()
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

	const result = await CharacterSkillsProvider.updateById(req.params.id, req.body);
	if (result instanceof Error){
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors:{
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.NO_CONTENT).send();
};