import { ETableNames } from '../../ETableNames';
import { ICharacterStatus } from '../../models';
import { Knex } from '../../knex';

export const create = async (characterStatus: Omit<ICharacterStatus, 'id'>) : Promise<number | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like', characterStatus.character_id)
			.count('* as count');

		if ( count === 0 ) {
			return new Error('Player is not registered');
		}

		const [result] = await Knex(ETableNames.CharacterStatus)
			.insert(characterStatus).returning('id');
		if ( typeof result === 'object') {
			return result.id;
		} else if ( typeof result === 'number') {
			return result;
		}
		return new Error('Error saving record');
	} catch (error) {
		console.error(error);
		return new Error('Error saving record');
	}
};