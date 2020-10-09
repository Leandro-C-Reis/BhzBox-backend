import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('user_address').insert([
        {
            user_id: 1,
            address_id: 1,
        }
    ]);
}