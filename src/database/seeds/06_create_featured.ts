import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('featured').insert([
        {
            product_id: 1,
        }
    ]);
}