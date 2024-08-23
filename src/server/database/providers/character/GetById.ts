import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacter} from '../../models';

export const getById = async (id: number) : Promise<ICharacter | Error> => {

	try {
		const result = await Knex(ETableNames.Character)
			.select('*')
			.where('id', '=', id)
			.first();
		if (result) return result;
        
		return new Error('Error when querying records');
	} catch (error) {
		return new Error('Error when querying records');
	}
};