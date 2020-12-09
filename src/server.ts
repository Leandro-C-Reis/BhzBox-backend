import dotenv from 'dotenv';
import server from './app';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

server.listen(process.env.SERVER_PORT || 3334, () => 
    console.log(`Listening on port ${process.env.SERVER_PORT || 3334}`));