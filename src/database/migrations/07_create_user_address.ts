import Knex from 'knex';

export function up(knex : Knex)
{
    return knex.schema.createTable('user_address', table => {
        table.increments('id').primary();
        table.integer('address_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('address_id').references('id').inTable('address');
        table.foreign('user_id').references('id').inTable('users');
    });
}

export function down(knex : Knex)
{
   return knex.schema.dropTable('user_address');
}
