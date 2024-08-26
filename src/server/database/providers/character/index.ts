import * as count from './Count';
import * as create  from './Create';
import * as getAll  from './GetAll';
import * as getById from './GetById';
import * as getCharacterByPlayerName from './GetCharacterByPlayerName';
import * as UpdateById from './UpdateById';
import * as deleteById from './DeleteById';

export const CharacterProvider = {
	...count,
	...create,
	...getAll,
	...getById,
	...getCharacterByPlayerName,
	...UpdateById,
	...deleteById
};