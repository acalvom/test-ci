const mysql = require('mysql');
const DBERROR = "Database Server Error";
const DBOK = "Database Is Connected";

var connection = mysql.createConnection({
    // host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Check connection
connection.connect(function (err){
    if(err){
        console.log(err);
        connection = reconnect(connection);
    } else {
        console.log(DBOK);
    }
});

function reconnect(connection){
    console.log("\n New connection tentative...");

    //- Destroy the current connection variable
    if(connection) connection.destroy();

    //- Create a new one
    var connection = mysql.createConnection({
        // host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    //- Try to reconnect
    connection.connect(function(err){
        if(err) {
            //- Try to connect every 2 seconds.
            setTimeout(reconnect, 2000);
        }else {
            console.log("\n\t *** New connection established with the database. ***")
            return connection;
        }
    });
}

module.exports = connection;
