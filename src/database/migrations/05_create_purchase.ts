import Knex from 'knex';

export async function up(knex : Knex) {
    return knex.schema.createTable('purchases', table => {
        table.increments('id').primary();
        table.float('uniq_value').notNullable();
        table.float('freight_value');
        table.float('total_value').notNullable();
        table.boolean('send').notNullable();
        table.boolean('receivment').notNullable();
        table.string('tracking_code');
        table.string('payment_status').notNullable();
        table.string('status').notNullable();
        table.date('creating_date').notNullable();
        table.integer('integration_id').unsigned();
        table.integer('product_id').unsigned().notNullable();
        table.foreign('product_id').references('id').inTable('products');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('address_id').unsigned().notNullable();
        table.foreign('address_id').references('id').inTable('address');
    })
}

export async function down(knex : Knex) {
    return knex.schema.dropTable('purchases');
}