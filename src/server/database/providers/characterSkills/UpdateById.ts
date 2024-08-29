import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterSkills } from '../../models';

export const updateById = async (id: number, characterSkills: Omit<ICharacterSkills,'id'>) : Promise<void | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like',characterSkills.character_id)
			.count<[{count : number}]>('* as count');

		const result = await Knex(ETableNames.CharacterSkills)
			.update(characterSkills)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Error updating registry');
	} catch (error) {
		return new Error('Error updating registry');
	}
};