import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterSavingThrows } from '../../models';

export const updateById = async (id: number, characterSavingThrows: Omit<ICharacterSavingThrows,'id'>) : Promise<void | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like',characterSavingThrows.character_id)
			.count<[{count : number}]>('* as count');

		const result = await Knex(ETableNames.CharacterSavingThrows)
			.update(characterSavingThrows)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Error updating registry');
	} catch (error) {
		return new Error('Error updating registry');
	}
};