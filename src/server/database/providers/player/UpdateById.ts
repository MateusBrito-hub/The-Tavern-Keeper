import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IPlayer } from '../../models';

export const updateById = async (id: number, player: Omit<IPlayer,'id'>) : Promise<void | Error> => {
	try {
		const result = await Knex(ETableNames.Player)
			.update(player)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Error updating registry');
	} catch (error) {
		console.log(error);
		return new Error('Error updating registry');
	}
};