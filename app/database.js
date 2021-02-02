const mysql = require('mysql');
const DBERROR = "Database Server Error";
const DBOK = "Database Is Connected";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'miw_2020',
    password: 'miw_2020',
    database: 'test'
});

// Check connection
connection.connect(function (err){
    if(err){
        console.log(DBERROR);
        return;
    } else {
        console.log(DBOK);
    }
});

module.exports = connection;
