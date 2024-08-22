import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
	return knex
		.schema
		.createTable(ETableNames.CharacterStatus, table => {
			table.bigIncrements('id').primary().index().unique();
			table.integer('armorClass').notNullable();
			table.integer('initiative').notNullable();
			table.integer('speed').notNullable();
			table.integer('hpMax').notNullable();
			table.bigInteger('character_id').notNullable().references('id').inTable(ETableNames.Character).onUpdate('CASCADE').onDelete('RESTRICT');

			table.comment('Table from character status register');
		});
}

export async function down(knex:Knex) {
	return knex.schema.dropTable(ETableNames.CharacterStatus);
}