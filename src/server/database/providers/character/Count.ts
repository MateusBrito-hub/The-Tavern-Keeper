import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const count = async (filter = '') : Promise<number | Error> => {
	try {
		const [{ count }] = await Knex(ETableNames.Character)
			.where('email','like', `%${filter}%`)
			.count<[{count : number}]>('* as count');
		if (Number.isInteger(Number(count))) return Number(count);
		return new Error('Error when querying the total number of character registrations');
	} catch (error) {
		return new Error('Error when querying the total number of character registrations');
	}
};