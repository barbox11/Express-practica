import {createPool}from 'mysql2/promise';

export const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    // password: ' ',
    database: 'companydb',
    port: 3306,
})

