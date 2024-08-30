import { ETableNames } from '../../ETableNames';
import { ICharacterLore } from '../../models';
import { Knex } from '../../knex';

export const create = async (characterLore: Omit<ICharacterLore, 'id'>) : Promise<number | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like', characterLore.character_id)
			.count('* as count');

		if ( count === 0 ) {
			return new Error('Player is not registered');
		}

		const [result] = await Knex(ETableNames.CharacterLore)
			.insert(characterLore).returning('id');
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