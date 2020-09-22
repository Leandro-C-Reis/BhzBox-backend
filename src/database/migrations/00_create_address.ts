import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('address', table => {
        table.increments('id').primary();
        table.string('cep').notNullable();
        table.string('uf', 2).notNullable();
        table.string('city').notNullable();
        table.string('district').notNullable();
        table.string('street');
        table.string('number');
        table.date('register_date').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('address');
}