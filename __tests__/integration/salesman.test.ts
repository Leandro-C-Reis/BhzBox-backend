import request from 'supertest';
import app from '../../src/app';

beforeAll(done => {
    done();
});

afterAll(done => {
    done();
});

describe('Salesman tests with valid params', () => {
    it('Should list all users', async () => {
        const response : any = await request(app).get('/salesman/list');

        expect(response.status).toBe(200);
    });

    it('Should list a unique salesman', async () => {
        const response : any = await request(app).get('/salesman/list/?id=1');

        expect(response.status).toBe(200);
    });

    it('Should register a salesman', async () => {
        const response : any = await request(app).post('/salesman/register')
        .send({
            name: "name",
            email: "email",
            password: "password",
        });

        expect(response.status).toBe(201);
    });

    it('Should update a salesman', async () => {
        const response : any = await request(app).put('/salesman/update/?id=1')
        .send({
            id: 1, 
            name: "name",
            email: "email",
            password: "password",
            birth_date: "xx/xx/xx",
            cpf: "123123123",
            cellphone: "123123123",
            address: [1, 2],
        });

        expect(response.status).toBe(200);
    });

    it('Should delete a salesman', async () => {
        const response : any = await request(app).delete('/salesman/delete/?id=1');

        expect(response.status).toBe(204);
    });
});

describe('Salesman tests with invalid params', () => {
    it('Should list a unique salesman', async () => {
        const response : any = await request(app).get('/salesman/list/?id=0');

        expect(response.status).toBe(406);
    });

    it('Should register a salesman', async () => {
        const response : any = await request(app).post('/salesman/register')
        .send({});

        expect(response.status).toBe(406);
    });

    it('Should update a salesman', async () => {
        const response : any = await request(app).put('/salesman/update/?id=0')
        .send({});

        expect(response.status).toBe(406)
    });

    it('Should delete a salesman', async () => {
        const response : any = await request(app).delete('/salesman/delete/?id=1');

        expect(response.status).toBe(406);
    });
});