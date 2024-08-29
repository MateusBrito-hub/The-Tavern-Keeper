import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterSkills } from '../../models';

export const getById = async (id: number) : Promise<ICharacterSkills | Error> => {

	try {
		const result = await Knex(ETableNames.CharacterSkills)
			.select('*')
			.where('id', '=', id)
			.first();
		if (result) return result;
        
		return new Error('Error when querying records');
	} catch (error) {
		return new Error('Error when querying records');
	}
};