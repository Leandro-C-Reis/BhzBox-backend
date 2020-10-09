import request from 'supertest';
import app from '../../src/app';

beforeAll(done => {
    done();
});

afterAll(done => {
    done();
});

describe('Address tests with valid params', () => {
    it('Should list all addresses', async () => {
        const response = await request(app).get('/address/list');

        expect(response.status).toBe(200);
    });

    it('Should create address of user', async () => {
        const address = {
            cep: "00000000",
            uf: "UF",
            city: "city",
            district: "district",
            user_id: 1,
        }

        const response = await request(app).post('/address/create').send(address);

        expect(response.status).toBe(200);
    });

    it('Should create address of salesman', async () => {
        const address = {
            cep: "00000000",
            uf: "UF",
            city: "city",
            district: "district",
            salesman_id: 1,
        }

        const response = await request(app).post('/address/create').send(address);

        expect(response.status).toBe(200);
    });

    it('Should list address of salesman', async () => {
        const response = await request(app).get('/address/salesman/1');

        expect(response.status).toBe(200);
    });
    
    it('Should list address of user', async () => {
        const response = await request(app).get('/address/user/1');

        expect(response.status).toBe(200);
    });

    it('Should list a uniq address', async () => {
        const response = await request(app).get('/address/list/1');

        expect(response.status).toBe(200);
    });

    it('Should update a address', async () => {
        const address = {
            cep: "00000000",
            uf: "UF",
            city: "city",
            district: "district"
        }

        const response = await request(app).put('/address/update/1').send(address);

        expect(response.status).toBe(200); 
    });

    it('Should delete a address', async () => {
        const response = await request(app).delete('/address/delete/2');

        expect(response.status).toBe(204);
    });
});

describe('Address tests with a invalid params', () => {
    it('Should not list address of salesman', async () => {
        const response = await request(app).get('/address/salesman/0');

        expect(response.status).toBe(404);
    });
    
    it('Should not list address of user', async () => {
        const response = await request(app).get('/address/user/0');

        expect(response.status).toBe(404);
    });

    it('Should not list a uniq address', async () => {
        const response = await request(app).get('/address/list/0');

        expect(response.status).toBe(404);
    });

    it('Should not create address of user', async () => {
        const address = {
            cep: "00000000",
            uf: "UF",
            city: "city",
            district: "district",
            user_id: 0,
        }

        const response = await request(app).post('/address/create').send(address);

        expect(response.status).toBe(406);
    });

    it('Should not create address of salesman', async () => {
        const address = {
            cep: "00000000",
            uf: "UF",
            city: "city",
            district: "district",
            salesman_id: 0,
        }

        const response = await request(app).post('/address/create').send(address);

        expect(response.status).toBe(406);
    });

    it('Should not update a address', async () => {
        const response = await request(app).put('/address/update/0');

        expect(response.status).toBe(404);
    });

    it('Should not delete a address', async () => {
        const response = await request(app).delete('/address/delete/0');

        expect(response.status).toBe(404);
    });
});