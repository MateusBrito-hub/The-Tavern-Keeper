import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
	return knex
		.schema
		.createTable(ETableNames.CharacterAttributes, table => {
			table.bigIncrements('id').primary().index().unique();
			table.integer('strength').notNullable();
			table.integer('dexterity').notNullable();
			table.integer('constituition').notNullable();
			table.integer('intelligence').notNullable();
			table.integer('wisdom').notNullable();
			table.integer('charisma').notNullable();
			table.bigInteger('character_id').notNullable().references('id').inTable(ETableNames.Character).onUpdate('CASCADE').onDelete('RESTRICT');


			table.comment('Table from character attributes register');
		});
}

export async function down(knex:Knex) {
	return knex.schema.dropTable(ETableNames.CharacterAttributes);
}