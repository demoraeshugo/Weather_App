const Pool = require("pg").Pool;

const { AWS_USER, AWS_PASSWORD, AWS_HOST, AWS_PORT, AWS_DATABASE } = process.env

const pool = new Pool({
    user: AWS_USER,
    password: AWS_PASSWORD,
    host: AWS_HOST,
    port: AWS_PORT,
    database: AWS_DATABASE
});

module.exports = pool;