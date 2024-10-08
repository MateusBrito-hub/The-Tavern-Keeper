import * as create from './Create';
import * as deleteById from './DeleteById';
import * as getById from './GetById';
import * as updateById from './UpdateById';

export const CharacterSkillsController = {
	...create,
	...deleteById,
	...getById,
	...updateById
};