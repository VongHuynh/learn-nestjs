import { config } from "dotenv"



config({ path: process.env.NODE_ENV ?  `.env.${process.env.NODE_ENV}` : '.env' });
export const redisConfig = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    username: 'default',
    password: process.env.REDIS_PASSWORD
}