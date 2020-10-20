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
        if (!id) return response.status(406).json({
            error: 406,
            message: 'product not founded'
        });

        const existId = await database('salespeople').select('id').where({ id });
        if (!existId || existId.length == 0) return response.status(406).json({
            error: 406,
            message: 'Salesman Id not exist'
        });

        const all = await database.select('*').from('products'); 
        const products = all.filter(element => element.salesman_id == id);
        
        if (!products) return response.status(406).json({
            error: 406,
            message: 'Products not founded'
        });

        response.status(200).json(products);
    }

    async show_featured(request: Request, response: Response)
    {
        const trx = await database.transaction();
        const ids = await trx('featured').select('product_id');
        
        let products = [];
        
        for (let arr of ids)
        {  
            products.push((await trx('products').select('*').where('id', arr.product_id))[0]);
        }
        
        await trx.commit();
        return response.status(200).json(products);
    }

    async crete_featured_products(request: Request, response: Response)
    {
        const ids = request.body;
        const trx = await database.transaction();

        for (let obj of ids)
        {
            const exist = await trx('products').select('id').where('id', obj.product_id).first();
            if (!exist)
            {
                await trx.rollback();
                return response.status(406).json({
                    code: 406,
                    message: "Product ID not exist"
                });
            }
        }
        
        const inserted = await trx('featured').insert(ids);

        await trx.commit();
        return response.status(201).json();
    }

    async create(request: Request, response: Response)
    {
        const { name, description, value, stock = 0, address_id, salesman_id, formato, peso, comprimento, altura, largura, diametro } = request.body;
        const salespeople = await database.select('*').from('salespeople');
        
        if (!salespeople.find(element => element.id == salesman_id)) return response.status(406).json({
            error: 406,
            message: 'Invalid salesman id'
        });

        const now = new Date;
        const register_date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

        if (!name || !description || !value)
        {
            return response.status(406).json({
                error: 406,
                message: 'Invalid Credentials'
            });
        }

        const trx = await database.transaction();
        const data = { name, description, value, register_date, stock, salesman_id, formato, peso, comprimento, altura, largura, diametro, address_id };
        const created = await trx('products').insert(data);

        if (created.length == 0) 
        {
            await trx.rollback();
            return response.status(406).json({
                code: 406,
                message: "Product Not Created"
            })
        }

        await trx.commit();
        return response.status(201).json();
    }

    async update(request: Request, response: Response)
    {
        const { id } = request.params;
        
        if (!id) return response.status(406).json({
            error: 406,
            message: 'id is missing'
        });
        
        const trx = await database.transaction(); 
        
        const existId = await trx('products').select('id').where({ id });
        if (!existId || existId.length == 0) return response.status(406).json({
            error: 406,
            message: 'Invalid id'
        });

        const { 
            name, 
            description, 
            value, 
            stock,
            formato, peso, comprimento, altura, largura, diametro
        } = request.body;
        
        const data = { name, description, value, stock, formato, peso, comprimento, altura, largura, diametro };
        const updated = await trx('products').where({ id }).update(data);
        
        if (!updated)
        {
            await trx.rollback();
            return response.status(406).json({
                error: 406,
                message: 'product not founded'
            });
        }

        await trx.commit();
        return response.status(200).json();
    }

    async destroy(request: Request, response: Response)
    {
        const { id } = request.params;

        const trx = await database.transaction();
        
        const deleted = await trx('products').where({ id }).del();
        
        if (!deleted)
        {
            await trx.rollback();
            return response.status(406).json({
                error: 406,
                message: 'Invalid id'
            });
        }

        await trx.commit();

        return response.status(204).json();
    }
}

export default ProductController;