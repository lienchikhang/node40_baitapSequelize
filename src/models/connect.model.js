import { Sequelize } from "sequelize";
import connect from '../configs/db.config.js';

const sequelize = new Sequelize(
    connect.database,
    connect.username,
    connect.password,
    {
        host: connect.host,
        dialect: connect.dialect,
        port: connect.port,
    }
)

try {
    sequelize.authenticate();
    console.log('mess:: connect successfully!')
} catch (error) {
    console.log('mess:: connect failed')
}

export default sequelize;