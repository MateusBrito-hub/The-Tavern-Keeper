import { ETableNames } from '../../ETableNames';
import { ICharacter } from '../../models';
import { Knex } from '../../knex';

export const create = async (character: Omit<ICharacter, 'id'>) : Promise<number | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Player)
			.where('id','like', character.player_Id)
			.count('* as count');

		if ( count === 0 ) {
			return new Error('Player is not registered');
		}

		const [result] = await Knex(ETableNames.Character)
			.insert(character).returning('id');
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