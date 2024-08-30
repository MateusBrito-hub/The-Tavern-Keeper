import { ETableNames } from '../../ETableNames';
import { ICharacterSavingThrows } from '../../models';
import { Knex } from '../../knex';

export const create = async (characterSavingThrows: Omit<ICharacterSavingThrows, 'id'>) : Promise<number | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like', characterSavingThrows.character_id)
			.count('* as count');

		if ( count === 0 ) {
			return new Error('Player is not registered');
		}

		const [result] = await Knex(ETableNames.CharacterSavingThrows)
			.insert(characterSavingThrows).returning('id');
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