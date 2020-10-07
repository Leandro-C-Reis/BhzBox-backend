import Knex from 'knex';

export function up(knex : Knex)
{
    return knex.schema.createTable('salesman_address', table => {
        table.increments('id').primary();
        table.integer('address_id').unsigned().notNullable();
        table.integer('salesman_id').unsigned().notNullable();
        table.foreign('address_id').references('id').inTable('address');
        table.foreign('salesman_id').references('id').inTable('salespeople');
    });
}

export function down(knex : Knex)
{
   return knex.schema.dropTable('salesman_address');
}
