import type { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
	return knex
		.schema
		.createTable(ETableNames.Player, table => {
			table.bigIncrements('id').primary().index()
			table.string('name').notNullable()
			table.string('surname').notNullable()
			table.string('email').notNullable()
			table.string('password').notNullable()

			table.comment('Table from players register')
		})
}

export async function down(knex:Knex) {
	return knex.schema.dropTable(ETableNames.Player)
}