const mysql = require('mysql');
const DBERROR = "Database Server Error";
const DBOK = "Database Is Connected";

var connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'miw_2020',
    password: process.env.DB_PASSWORD || 'miw_2020',
    database: process.env.DB_DATABASE || 'test'
});

// Check connection
connection.connect(function (err){
    if(err){
        console.log(DBERROR);
    } else {
        console.log(DBOK);
    }
});

module.exports = connection;
