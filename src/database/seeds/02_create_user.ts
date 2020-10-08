import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('users').insert([
        {
            name: "teste",
	        email: "teste1@gmail.com",
            password: "password",
            register_date: "0001-01-01"
        }
    ]);
}