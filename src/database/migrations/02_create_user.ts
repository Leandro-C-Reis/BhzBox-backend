import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('user', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.date('register_date').notNullable();
        table.date('birth_date');
        table.string('cpf');
        table.string('cellphone');
        table.integer('address_id').unsigned();
        table.foreign('address_id').references('id').inTable('address');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('user');
}