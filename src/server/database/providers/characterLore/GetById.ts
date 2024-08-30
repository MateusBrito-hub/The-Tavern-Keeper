import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterLore } from '../../models';

export const getById = async (id: number) : Promise<ICharacterLore | Error> => {

	try {
		const result = await Knex(ETableNames.CharacterLore)
			.select('*')
			.where('id', '=', id)
			.first();
		if (result) return result;
        
		return new Error('Error when querying records');
	} catch (error) {
		return new Error('Error when querying records');
	}
};