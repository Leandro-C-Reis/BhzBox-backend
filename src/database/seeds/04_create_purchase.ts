import Knex from 'knex';

export async function seed(knex : Knex)
{
    await knex('purchases').insert([
        {
            user_id: 1,
            product_id: 1,
            address_id: 1,
            payment_status : "card",
            uniq_value: 49.40,
            total_value: 59.40,
            send: false,
            receivment: false,
            status: "inprogress",
            register_date: "0001-01-01"
        }
    ]);
}