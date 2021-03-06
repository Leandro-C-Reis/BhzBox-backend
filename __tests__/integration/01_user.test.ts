import request from 'supertest';
import app from '../../src/app';

beforeAll(done => {
    done();
});

afterAll(done => {
    done();
});

describe('User tests with valid params', () => {
    it('Should list all users', async () => {
        const response : any = await request(app).get('/user/list');

        expect(response.status).toBe(200);
    });

    it('Should list a unique user', async () => {
        const response : any = await request(app).get('/user/list/1');

        expect(response.status).toBe(200);
    });

    it('Should register a user', async () => {
        const response : any = await request(app).post('/user/register')
        .send({
            name: "name",
            email: "email",
            password: "password",
        });

        expect(response.status).toBe(201);
    });

    it('Should update a user', async () => {
        const response : any = await request(app).put('/user/update/1')
        .send({
            id: 1, 
            name: "name",
            email: "email2",
            password: "password",
            birth_date: "0001-01-01",
            cpf: "123123123",
            cellphone: "123123123",
            purchase: [1, 2],
            cart: [3, 4],
            address: [1, 2],
        });

        expect(response.status).toBe(200);
    });

    it('Should delete a user', async () => {
        const response : any = await request(app).delete('/user/delete/2');

        expect(response.status).toBe(204);
    });
});

describe('User tests with invalid params', () => {
    it('Should not list a unique user', async () => {
        const response : any = await request(app).get('/user/list/0');

        expect(response.status).toBe(406);
    });

    it('Should not register a user', async () => {
        const response : any = await request(app).post('/user/register')
        .send({});

        expect(response.status).toBe(406);
    });

    it('Should not update a user', async () => {
        const response : any = await request(app).put('/user/update/0')
        .send({
            id: 1, 
            name: "name",
            email: "email",
            password: "password",
            register_date: "0001-01-01",
            birth_date: "0001-01-01",
            cpf: "123123123",
            cellphone: "123123123",
            purchase: [1, 2],
            cart: [3, 4],
            address: [1, 2],
        });

        expect(response.status).toBe(406)
    });

    it('Should not delete a user', async () => {
        const response : any = await request(app).delete('/user/delete/0');

        expect(response.status).toBe(406);
    });
});