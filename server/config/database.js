const pg = require('pg');
require('dotenv').config();

const config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: {
        rejectUnauthorized: false
    }
}


const pool = new pg.Pool(config);
module.exports = { pool };