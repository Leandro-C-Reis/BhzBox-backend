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
        const response : any = await request(app).get('/user/list/?id=1');

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
        const response : any = await request(app).put('/user/update/?id=1')
        .send({
            id: 1, 
            name: "name",
            email: "email",
            password: "password",
            register_date: "xx/xx/xx",
            birth_date: "xx/xx/xx",
            cpf: "123123123",
            cellphone: "123123123",
            purchase: [1, 2],
            cart: [3, 4],
            address: [1, 2],
        });

        expect(response.status).toBe(200);
    });

    it('Should delete a user', async () => {
        const response : any = await request(app).delete('/user/delete/?id=1');

        expect(response.status).toBe(204);
    });
});

describe('User tests with invalid params', () => {
    it('Should list a unique user', async () => {
        const response : any = await request(app).get('/user/list/?id=0');

        expect(response.status).toBe(406);
    });

    it('Should register a user', async () => {
        const response : any = await request(app).post('/user/register')
        .send({});

        expect(response.status).toBe(406);
    });

    it('Should update a user', async () => {
        const response : any = await request(app).put('/user/update/?id=0')
        .send({
            id: 1, 
            name: "name",
            email: "email",
            password: "password",
            register_date: "xx/xx/xx",
            birth_date: "xx/xx/xx",
            cpf: "123123123",
            cellphone: "123123123",
            purchase: [1, 2],
            cart: [3, 4],
            address: [1, 2],
        });

        expect(response.status).toBe(406)
    });

    it('Should delete a user', async () => {
        const response : any = await request(app).delete('/user/delete/?id=1');

        expect(response.status).toBe(406);
    });
});