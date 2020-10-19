import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('address').insert([
        {
            cep: "65908692",
            uf: "UF",
            city: "teste",
            district: "teste",
            register_date: "0001-01-01"
        },
        {
            cep: "70002900",
            uf: "UF",
            city: "teste",
            district: "teste",
            register_date: "0001-01-01"
        }
    ]);
}