import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const port = parseInt(process.env.DB_PORT = "");

const connection = knex({
  client: 'pg',
  connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: port
  },
  useNullAsDefault: true,
})

export default connection;