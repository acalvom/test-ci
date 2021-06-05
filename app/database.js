const mysql = require('mysql');
const DBERROR = "Database Server Error";
const DBOK = "Database Is Connected";

const connection = mysql.createConnection({
    // host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Check connection
connection.connect(function (err){
    if(err){
        console.log(err);
    } else {
        console.log(DBOK);
    }
});

module.exports = connection;
