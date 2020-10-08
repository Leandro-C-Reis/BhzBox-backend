import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('salespeople').insert([
        {
            name: "teste",
            email: "teste@teste.com",
            password: "123teste",
            register_date: "0001-01-01"
        }
    ]);
}