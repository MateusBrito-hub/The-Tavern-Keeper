import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
	return knex
		.schema
		.createTable(ETableNames.CharacterLore, table => {
			table.bigIncrements('id').primary().index().unique();
			table.string('personalityTraits', 500).notNullable();
			table.string('ideals', 255).notNullable();
			table.string('bonds', 255).notNullable();
			table.string('flaws', 255).notNullable();
			table.string('lore', 1000).notNullable();
			table.bigInteger('character_id').notNullable().references('id').inTable(ETableNames.Character).onUpdate('CASCADE').onDelete('RESTRICT');


			table.comment('Table from character lore register');
		});
}

export async function down(knex:Knex) {
	return knex.schema.dropTable(ETableNames.CharacterLore);
}