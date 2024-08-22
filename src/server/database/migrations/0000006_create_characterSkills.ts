import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
	return knex
		.schema
		.createTable(ETableNames.CharacterSkills, table => {
			table.bigIncrements('id').primary().index().unique();
			table.integer('acrobatics').notNullable();
			table.integer('animalHandling').notNullable();
			table.integer('arcana').notNullable();
			table.integer('athletics').notNullable();
			table.integer('deception').notNullable();
			table.integer('history').notNullable();
			table.integer('insight').notNullable();
			table.integer('intimidation').notNullable();
			table.integer('investigation').notNullable();
			table.integer('medicine').notNullable();
			table.integer('nature').notNullable();
			table.integer('perception').notNullable();
			table.integer('performance').notNullable();
			table.integer('persuasion').notNullable();
			table.integer('religion').notNullable();
			table.integer('sleightOfHand').notNullable();
			table.integer('stealth').notNullable();
			table.integer('survival').notNullable();
			table.bigInteger('character_id').notNullable().references('id').inTable(ETableNames.Character).onUpdate('CASCADE').onDelete('RESTRICT');


			table.comment('Table from character skills register');
		});
}

export async function down(knex:Knex) {
	return knex.schema.dropTable(ETableNames.CharacterSkills);
}