import { Request, Response } from 'express';
import database from '../database/connection';

class SalesmanController {
    async index(request: Request, response: Response)
    {
        const data = await database.select('*').from('salespeople');

        return response.status(200).json(data);
    }

    async show(request: Request, response: Response)
    {
        const { id } = request.params;
        const data = await database.select('*').from('salespeople');
        const salesman = data.find(element => element.id == id);

        if (!salesman) return response.status(406).json({
            error: 406,
            message: 'Salesman not founded'
        });

        return response.status(200).json(salesman);
    }

    async create(request: Request, response: Response)
    {
        const { name, email, password } = request.body;
        
        const now = new Date;
        const register_date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

        if (!name || !email || !password) return response.status(406).json({
            error: 406,
            message: 'Invalid Credentials'
        });

        const trx = await database.transaction();
        const data = { name, email, password, register_date };
        await trx('salespeople').insert(data);

        trx.commit();
        return response.status(200).json();
    }

    async update(request: Request, response: Response)
    {
        const { id } = request.params;
        const { 
            name,
            email,
            password,
            birth_date,
            cpf,
            cellphone,
            address_id,
        } = request.body;

        if (!id) return response.status(406).json({
            error: 406,
            message: 'Invalid id'
        });

        const data = { name, email, password, birth_date, cpf,cellphone, address_id }

        const trx = await database.transaction();
        const updated = await trx('salespeople').where({ id }).update(data);
        
        if (!updated) return response.status(406).json({
            error: 406,
            message: 'Salesman not founded'
        });

        trx.commit();
        return response.status(200).json();
    }

    async destroy(request: Request, response: Response)
    {
        const { id } = request.params;

        const trx = await database.transaction();

        const deleted = await trx('salespeople').where({ id }).del();
        
        if (!deleted) return response.status(406).json({
            error: 406,
            message: 'Invalid id'
        });

        trx.commit();

        return response.status(200).json();
    }
}

export default SalesmanController;