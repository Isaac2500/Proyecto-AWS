require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    database: 'escuela_development',
    username: 'postgres',
    password: 'Cefa3591',
    host: 'localhost',
    port: 5432
  },
  production: {
    dialect: 'postgres',
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
  }
};