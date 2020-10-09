import { Request, Response } from 'express';
import database from '../database/connection';

class AddressController
{
    async index(request : Request, response : Response)
    {
        const data = await database.select('*').from('address');
        response.status(200).json(data);
    }

    async show(request : Request, response : Response)
    {
        const { id } = request.params;

        const data = await database.select('*').from('address').where({ id });

        if (data.length == 0) return response.status(404).json({
            code: "404",
            message: "Address not founded"
        });

        response.status(200).json(data);
    }

    async show_of_salesman(request : Request, response : Response)
    {
        const { id } = request.params;
        const data = await database.select('address_id').from('salesman_address').where('salesman_id', id);
        
        if (data.length == 0) return response.status(404).json({
            code: 404,
            message: "Addresses not founded"
        });
        // { code here}

        response.status(200).json(data);
    }

    async show_of_user(request : Request, response : Response)
    {
        const { id } = request.params;
        const data = await database.select('address_id').from('user_address').where('user_id', id);
        
        if (data.length == 0) return response.status(404).json({
            code: 404,
            message: "Addresses not founded"
        });

        response.status(200).json(data);
    }

    async create(request : Request, response : Response)
    {
        const { cep, uf, city, district, street, number, salesman_id, user_id } = request.body;

        if (!salesman_id && !user_id) return response.status(406).json({
            code: 406,
            message: "Credentials is missing"
        });
        if (salesman_id && user_id) return response.status(406).json({
            code: 406,
            message: "Can not accept two types of clients"
        });

        const now = new Date;
        const register_date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        
        if (!cep || ! uf || !city || !district) response.status(406).json();

        const data = { cep, uf, city, district, street, number, register_date}
        
        const trx = await database.transaction();
        
        const created = await trx('address').insert(data).returning('id');

        if (!created || created.length == 0) 
        {
            await trx.rollback();
            return response.status(406).json({
                code: 406,
                message: "Address not created"
            });
        }
        
        const address_id = created[0];

        if (user_id) await trx('user_address').insert({ 
            user_id,
            address_id
        }) 
        else await trx('salesman_address').insert({ 
            salesman_id,
            address_id
        });

        await trx.commit();
        return response.status(200).json(address_id);
    }

    async update(request : Request, response : Response)
    {
        const { id } = request.params;
        
        if (!id) return response.status(406).json({
            code: 406,
            message: "id is missing"
        });
        
        const { cep, uf, city, district, street, number } = request.body;
        const data =  { cep, uf, city, district, street, number, };
        
        const trx = await database.transaction();
        
        const existId = await trx('address').select('id').where({ id });
        if (!existId || existId.length == 0) return response.status(404).json({
            code: 404,
            message: "address not founded with this id"
        });

        const updated = await trx('address').where({ id }).update(data);

        if (!updated)
        {
            await trx.rollback();
            return response.status(406).json({
                code: 406,
                message: "Not updated, consult your credentials"
            });
        }

        await trx.commit();
        return response.status(200).json();
    }

    async destroy(request : Request, response : Response)
    {
        const { id } = request.params;
        if (!id) return response.status(406).json({
            code: 406,
            message: "id is missing"
        });

        const trx = await database.transaction();

        const existId = await trx('address').select('id').where({ id });
        if (!existId || existId.length == 0) return response.status(404).json({
            code: 404,
            message: "address not founded with this id"
        });

        await trx('user_address').where('address_id', id).del();
        await trx('salesman_address').where('address_id', id).del();

        const destroyed = await trx('address').where({ id }).del();
        if (!destroyed)
        {
            await trx.rollback();
            return response.status(406).json({
                code: 406,
                message: "User not deleted, consult your credentials"
            });
        }

        await trx.commit();
        return response.status(204).json();
    }
}

export default AddressController;