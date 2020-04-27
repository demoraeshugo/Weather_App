const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "citylist"
});

module.exports = pool;