import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const connection = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    useNullAsDefault: true,
})

export default connection;