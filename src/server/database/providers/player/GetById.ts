import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IPlayer} from '../../models';

export const getById = async (id: number) : Promise<IPlayer | Error> => {

	try {
		const result = await Knex(ETableNames.Player)
			.select('*')
			.where('id', '=', id)
			.first();
		if (result) return result;
        
		return new Error('Error when querying records');
	} catch (error) {
		console.log(error);
		return new Error('Error when querying records');
	}
};