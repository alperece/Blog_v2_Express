const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alper',
    password: '654321',
    database: 'fbw10'
});

module.exports = connection;