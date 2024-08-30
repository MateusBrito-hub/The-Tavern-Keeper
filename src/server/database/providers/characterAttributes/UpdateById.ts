import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacterAttributes } from '../../models';

export const updateById = async (id: number, characterAttributes: Omit<ICharacterAttributes,'id'>) : Promise<void | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Character)
			.where('id','like',characterAttributes.character_id)
			.count<[{count : number}]>('* as count');

		const result = await Knex(ETableNames.CharacterAttributes)
			.update(characterAttributes)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Error updating registry');
	} catch (error) {
		return new Error('Error updating registry');
	}
};