import { Request, Response } from 'express';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICharacterSkills } from '../../database/models';
import { CharacterSkillsProvider } from '../../database/providers';

interface IBodyProps extends Omit<ICharacterSkills, 'id'> { }

export const createValidation = validation((getSchema) => ({
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
	}))
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

	const result = await CharacterSkillsProvider.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		});
	}

	return res.status(StatusCodes.CREATED).json(result);
};