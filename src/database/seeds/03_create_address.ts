import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('address').insert([
        {
            cep: "00000000",
            uf: "UF",
            city: "teste",
            district: "teste",
            register_date: "0001-01-01"
        }
    ]);
}