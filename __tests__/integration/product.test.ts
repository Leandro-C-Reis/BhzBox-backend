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
        const response : any = await request(app).get('/product/salesman/?id=1');

        expect(response.status).toBe(200);
    });

    it('Should list a unique product', async () => {
        const response : any = await request(app).get('/product/list/?id=1');

        expect(response.status).toBe(200);
    });

    it('Should list highlighted products', async () => {
        const response : any = await request(app).get('/product/list/highlighted');

        expect(response.status).toBe(200);
    });

    it('Should register a product', async () => {
        const response : any = await request(app).post('/product/register')
        .send({
            salesmanId: 1,
            name: "name",
            description: "description",
            value: 1,
            stock: 1,
            imageURL: [
                "image"
            ],
        });

        expect(response.status).toBe(201);
    });

    it('Should update a product', async () => {
        const response : any = await request(app).put('/product/update/?id=1')
        .send({
            salesmanId: 1,
            name: "name2",
            description: "description2",
            value: 2,
            stock: 2,
            imageURL: [
                "image", "image"
            ],
        });

        expect(response.status).toBe(200);
    });

    it('Should delete a product', async () => {
        const response : any = await request(app).delete('/product/delete/?id=1');

        expect(response.status).toBe(204);
    });
});

describe('Products test with invalid params', () => {
    it('Should not list the products of a unique seller', async () => {
        const response : any = await request(app).get('/product/salesman/?id=0');

        expect(response.status).toBe(406);
    });

    it('Should not list a unique product', async () => {
        const response : any = await request(app).get('/product/list/?id=0');

        expect(response.status).toBe(406);
    });

    it('Should not register a product', async () => {
        const response : any = await request(app).post('/product/register')
        .send({});

        expect(response.status).toBe(406);
    });

    it('Should not update a product', async () => {
        const response : any = await request(app).put('/product/update/?id=0')
        .send({
            salesmanId: 1,
            name: "name2",
            description: "description2",
            value: 2,
            stock: 2,
            imageURL: [
                "image", "image"
            ],
        });

        expect(response.status).toBe(406);
    });

    it('Should not update a product', async () => {
        const response : any = await request(app).put('/product/update/?id=1')
        .send({});

        expect(response.status).toBe(406);
    });

    it('Should not delete a product', async () => {
        const response : any = await request(app).delete('/product/delete/?id=0');

        expect(response.status).toBe(406);
    });
});