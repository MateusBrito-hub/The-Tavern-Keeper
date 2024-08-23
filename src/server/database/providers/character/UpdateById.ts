import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICharacter } from '../../models';

export const updateById = async (id: number, character: Omit<ICharacter,'id'>) : Promise<void | Error> => {
	try {

		const [{count}] = await Knex(ETableNames.Player)
			.where('id','like',character.player_Id)
			.count<[{count : number}]>('* as count');

		const result = await Knex(ETableNames.Character)
			.update(character)
			.where('id', '=', id);
		if (result > 0) return;
		return new Error('Error updating registry');
	} catch (error) {
		console.log(error);
		return new Error('Error updating registry');
	}
};