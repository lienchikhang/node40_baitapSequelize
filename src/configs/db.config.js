import dotenv from 'dotenv'

dotenv.config();

export default {
    database: process.env.DB_DATBASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
}

