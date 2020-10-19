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
            register_date: "0001-01-01",
            address_id: 1,
            
            formato: 1,
            peso: '1',
            comprimento: 20,
            altura: 2,
            largura: 20,
            diametro: 0
        }
    ]);
}