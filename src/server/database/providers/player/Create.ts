import { ETableNames } from '../../ETableNames';
import { IPlayer } from '../../models';
import { Knex } from '../../knex';

export const create = async (player: Omit<IPlayer, 'id'>) : Promise<number | Error> => {
	try {
		const [result] = await Knex(ETableNames.Player)
			.insert(player).returning('id');
		if ( typeof result === 'object') {
			return result.id;
		} else if ( typeof result === 'number') {
			return result;
		}
		return new Error('Error saving record');
	} catch (error) {
		return new Error('Error saving record');
	}
};