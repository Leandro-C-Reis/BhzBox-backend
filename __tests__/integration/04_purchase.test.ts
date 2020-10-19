import request from 'supertest';
import app from '../../src/app';

beforeAll(done => {
    done();
});

afterAll(done => {
    done();
});

describe('Purchase tests with valid params', () => {
    it('Should list all purchases', async () => {
        const response = await request(app).get('/purchase/list');

        expect(response.status).toBe(200)
    });

    it('Should list purchases in process', async () => {
        const response = await request(app).get('/purchase/inprocess');

        expect(response.status).toBe(200)
    });

    it('Should list purchases completed', async () => {
        const response = await request(app).get('/purchase/completed');

        expect(response.status).toBe(200)
    });

    it('Should list purchases of a user', async () => {
        const response = await request(app).get('/purchase/user/1');

        expect(response.status).toBe(200)
    });

    it('Should list a uniq by id', async () => {
        const response = await request(app).get('/purchase/list/1');

        expect(response.status).toBe(200)
    });

    it('Should create a purchase', async () => {
        const data = {
            user_id: 1,
            product_id: 1,
            address_id: 1,
            payment_status: "card",
            servico: '04510'
        }

        const response : any = await request(app).post('/purchase/create').send(data);

        expect(response.status).toBe(200)
    });

    it('Should update purchase status', async () => {
        const response = await request(app).put('/purchase/update/2').send({ payment_status: "payed" });

        expect(response.status).toBe(200)
    });
});

describe('Purchase tests with invalid params', () => {
    it('Should not list purchases of a user', async () => {
        const response = await request(app).get('/purchase/user/0');

        expect(response.status).toBe(404)
    });

    it('Should not list a uniq by id', async () => {
        const response = await request(app).get('/purchase/list/0');

        expect(response.status).toBe(404)
    });

    it('Should not create a purchase', async () => {
        const response = await request(app).post('/purchase/create');

        expect(response.status).toBe(406)
    });

    it('Should not update purchase status', async () => {
        const response = await request(app).put('/purchase/update/0');

        expect(response.status).toBe(406)
    });
});
