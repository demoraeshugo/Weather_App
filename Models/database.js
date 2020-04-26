const Pool = require("pg").Pool;

const pool = new Pool({
    user: "School",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "citylist"
});

module.exports = pool;