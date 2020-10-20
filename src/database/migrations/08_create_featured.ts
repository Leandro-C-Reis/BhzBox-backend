import Knex from 'knex';

export function up(knex : Knex)
{
    return knex.schema.createTable('featured', table => {
        table.increments('id').primary();
        table.integer('product_id').unsigned();
        table.foreign('product_id').references('id').inTable('products');
    });
}

export function down(knex : Knex)
{
   return knex.schema.dropTable('featured');
}
