import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('description').notNullable();
        table.date('register_date').notNullable();
        table.float('value').notNullable();
        table.integer('stock').notNullable();
        table.integer('salesman_id').unsigned().notNullable();
        table.foreign('salesman_id').references('id').inTable('salesman');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('product');
}