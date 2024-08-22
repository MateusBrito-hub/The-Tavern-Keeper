import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
	return knex
		.schema
		.createTable(ETableNames.Character, table => {
			table.bigIncrements('id').primary().index().unique();
			table.string('name').notNullable();
			table.string('classLevel').notNullable();
			table.string('race').notNullable();
			table.string('background').notNullable();
			table.integer('age').notNullable();
			table.decimal('height').notNullable();
			table.decimal('weigth').notNullable();
			table.string('eyes').notNullable();
			table.string('skin').notNullable();
			table.string('hair').notNullable();
			table.bigInteger('player_id').notNullable().references('id').inTable(ETableNames.Player).onUpdate('CASCADE').onDelete('RESTRICT');



			table.comment('Table from character register');
		});
}

export async function down(knex:Knex) {
	return knex.schema.dropTable(ETableNames.Character);
}