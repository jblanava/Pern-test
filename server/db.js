const Pool = require("pg").Pool;

const pool = new Pool({
    user : 'postgres',
    password : '1234QWER',
    host : 'localhost',
    port : 5432,
    database : 'pern-prueba'
});

module.exports = pool;