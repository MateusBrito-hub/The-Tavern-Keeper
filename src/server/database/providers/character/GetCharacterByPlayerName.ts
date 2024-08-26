import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacter } from '../../models';

export const getCharacterByPlayerName = async (page: number, limit: number, filter: string, player_name: string, id = 0) : Promise<ICharacter[] | Error> => {
	try {
		const player = await Knex(ETableNames.Player)
			.select('id')
			.where('name', player_name)
			.first();

		if(!player) {
			return new Error('Player not found!');
		}

		const query = Knex(ETableNames.Character)
			.select('*')
			.where('player_id', Number(player.id));

		if (filter) {
			query.andWhere('name', 'like', `%${filter}%`);
		}

		query.offset((page-1) * limit)
			.limit(limit);

		const result = await query;

		if(player.id > 0 && result.every(item => item.id !== id)) {
			const resultById = await Knex(ETableNames.Character)
				.select('*')
				.where('player_id', Number(player.id));
			if (resultById) return resultById;
		}

		return result;
	} catch (error) {
		console.log(error);
		return new Error('Error when querying records');
	}
};