import { ETableNames } from '../../ETableNames';
import { ICharacterAttributes } from '../../models';
import { Knex } from '../../knex';

export const create = async (characterAttributes: Omit<ICharacterAttributes, 'id'>) : Promise<number | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like', characterAttributes.character_id)
			.count('* as count');

		if ( count === 0 ) {
			return new Error('Player is not registered');
		}

		const [result] = await Knex(ETableNames.CharacterAttributes)
			.insert(characterAttributes).returning('id');
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