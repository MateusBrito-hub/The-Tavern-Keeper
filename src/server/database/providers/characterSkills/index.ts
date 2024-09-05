import * as count from './Count';
import * as create  from './Create';
import * as getById from './GetById';
import * as UpdateById from './UpdateById';
import * as deleteById from './DeleteById';

export const CharacterSkillsProvider = {
	...count,
	...create,
	...getById,
	...UpdateById,
	...deleteById
};