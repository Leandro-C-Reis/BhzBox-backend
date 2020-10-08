import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('products').insert([
        {
            name: "product1",
            description: "something",
            value: 49.90,
            stock: 5,
            salesman_id: 1,
            register_date: "0001-01-01"
        }
    ]);
}