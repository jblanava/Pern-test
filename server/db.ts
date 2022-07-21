const Pool: any = require("pg").Pool;

const pool = new Pool({
    user : 'postgres',
    password : '1234QWER',
    host : 'localhost',
    port : 5432,
    database : 'postgres'
});

module.exports = pool;

// User ID=postgres;Password=1234QWER;Host=localhost;Port=5432;Database=postgres;