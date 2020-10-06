import { Request, Response } from 'express';
import database from '../database/connection';

class ProductController {
    async index(request: Request, response: Response)
    {
        const data = await database.select('*').from('products');

        response.status(200).json(data);
    }

    async show(request: Request, response: Response)
    {
        const { id } = request.params;
        const data = await database.select('*').from('products');
        const product = data.find(element => element.id == id);
        
        if (!product) return response.status(406).json({
            error: 406,
            message: 'Product not founded'
        });

        return response.status(200).json(product);
    }

    async show_of_salesman(request: Request, response: Response)
    {
        const { id } = request.params;
        const all = await database.select('*').from('products'); 
        const products = all.filter(element => element.salesman_id == id);
        
        if (!products) return response.status(406).json({
            error: 406,
            message: 'Products not founded'
        });

        response.status(200).json(products);
    }

    async show_highlighted(request: Request, response: Response)
    {
        
    }

    async create(request: Request, response: Response)
    {
        const { name, description, value, stock = 0, salesman_id } = request.body;
        const salespeople = await database.select('*').from('salespeople');
        
        if (!salespeople.find(element => element.id == salesman_id)) return response.status(406).json({
            error: 406,
            message: 'Invalid salesman id'
        });

        const now = new Date;
        const register_date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

        if (!name || !description || !value) return response.status(406).json({
            error: 406,
            message: 'Invalid Credentials'
        });

        const trx = await database.transaction();
        const data = { name, description, value, register_date, stock, salesman_id };
        await trx('products').insert(data);

        trx.commit();
        return response.status(200).json();
    }

    async update(request: Request, response: Response)
    {
        const { id } = request.params;
        
        if (!id) return response.status(406).json({
            error: 406,
            message: 'Invalid id'
        });

        const { 
            name, 
            description, 
            value, 
            stock,
        } = request.body;

        const data = { name, description, value, stock};
        const trx = await database.transaction();
        const updated = await trx('products').where({ id }).update(data);
        
        if (!updated) return response.status(406).json({
            error: 406,
            message: 'product not founded'
        });

        trx.commit();
        return response.status(200).json();
    }

    async destroy(request: Request, response: Response)
    {
        const { id } = request.params;

        const trx = await database.transaction();

        const deleted = await trx('products').where({ id }).del();
        
        if (!deleted) return response.status(406).json({
            error: 406,
            message: 'Invalid id'
        });

        trx.commit();

        return response.status(200).json();
    }
}

export default ProductController;