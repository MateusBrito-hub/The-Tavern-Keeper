import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterStatus } from '../../models';

export const updateById = async (id: number, characterStatus: Omit<ICharacterStatus,'id'>) : Promise<void | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like',characterStatus.character_id)
			.count<[{count : number}]>('* as count');

		const result = await Knex(ETableNames.CharacterStatus)
			.update(characterStatus)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Error updating registry');
	} catch (error) {
		return new Error('Error updating registry');
	}
};