import * as create from './Create';
import * as deleteById from './DeleteById';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as getCharacterByPlayerName from './GetCharacterByPlayerName';
import * as updateById from './UpdateById';

export const CharacterController = {
	...create,
	...deleteById,
	...getAll,
	...getById,
	...getCharacterByPlayerName,
	...updateById
};