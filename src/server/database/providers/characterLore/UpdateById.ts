import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterLore } from '../../models';

export const updateById = async (id: number, characterLore: Omit<ICharacterLore,'id'>) : Promise<void | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like',characterLore.character_id)
			.count<[{count : number}]>('* as count');

		const result = await Knex(ETableNames.CharacterLore)
			.update(characterLore)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Error updating registry');
	} catch (error) {
		return new Error('Error updating registry');
	}
};