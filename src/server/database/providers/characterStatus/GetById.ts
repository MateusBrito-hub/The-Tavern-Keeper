import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterStatus} from '../../models';

export const getById = async (id: number) : Promise<ICharacterStatus | Error> => {

	try {
		const result = await Knex(ETableNames.CharacterStatus)
			.select('*')
			.where('id', '=', id)
			.first();
		if (result) return result;
        
		return new Error('Error when querying records');
	} catch (error) {
		return new Error('Error when querying records');
	}
};