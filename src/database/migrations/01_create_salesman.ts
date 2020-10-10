import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('salespeople', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.date('register_date').notNullable();
        table.date('birth_date');
        table.string('cpf').unique();
        table.string('cellphone');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('salespeople');
}