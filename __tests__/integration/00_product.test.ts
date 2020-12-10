import request from 'supertest';
import app from '../../src/app';

beforeAll(done => {
    done();
});

afterAll(done => {
    done();
});

describe('Products tests with valid params', () => {
    it('Should list all products', async () => {
        const response : any = await request(app).get('/product/list');

        expect(response.status).toBe(200);
    });

    it('Should list the products of a unique seller', async () => {
        const response : any = await request(app).get('/product/salesman/1');

        expect(response.status).toBe(200);
    });

    it('Should list a unique product', async () => {
        const response : any = await request(app).get('/product/list/1');

        expect(response.status).toBe(200);
    });

    it('Should list featured products', async () => {
        const response : any = await request(app).get('/product/featured');

        expect(response.status).toBe(200);
    });

    it('Should register a product', async () => {
        const response : any = await request(app).post('/product/register')
        .send({
            name: "name",
            description: "description",
            value: 1,
            stock: 1,
            salesman_id: 1,
            formato: 1,
            peso: '1',
            comprimento: 20,
            altura: 2,
            largura: 20,
            diametro: 0,
            address_id: 2,
        });
        
        expect(response.status).toBe(201);
    });

    // it('Should not receive products with valid seller', async () => {
    //     const response : any = await request(app).get('/product/salesman/2');

    //     expect(response.status).toBe(404);
    // });

    it('Should update a product', async () => {
        const response : any = await request(app).put('/product/update/1')
        .send({
            salesman_id: 1,
            name: "name2",
            description: "description2",
            value: 2,
            stock: 2,
        });

        expect(response.status).toBe(200);
    });

    it('Should delete a product', async () => {
        const response : any = await request(app).delete('/product/delete/2');

        expect(response.status).toBe(204);
    });
});

describe('Products test with invalid params', () => {
    it('Should not list the products of a unique seller', async () => {
        const response : any = await request(app).get('/product/salesman/0');

        expect(response.status).toBe(406);
    });

    it('Should not list a unique product', async () => {
        const response : any = await request(app).get('/product/list/0');

        expect(response.status).toBe(406);
    });

    it('Should not register a product', async () => {
        const response : any = await request(app).post('/product/register')
        .send({});

        expect(response.status).toBe(406);
    });

    it('Should not update a product', async () => {
        const response : any = await request(app).put('/product/update/0')
        .send({
            name: "name2",
            description: "description2",
            value: 2,
            stock: 2,
        });

        expect(response.status).toBe(406);
    });

    it('Should not update a product', async () => {
        const response : any = await request(app).put('/product/update/0')
        .send({});

        expect(response.status).toBe(406);
    });

    it('Should not delete a product', async () => {
        const response : any = await request(app).delete('/product/delete/0');

        expect(response.status).toBe(406);
    });
});