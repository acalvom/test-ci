const express = require('express')
const router = express.Router();
const connection = require('../database');
const DBERROR = "Database Server Error";

router.get('/personal', (req, res) => {
    var sql = 'SELECT * FROM personal';
    connection.query(sql, function (err, rows) {
        if(err){
            res.json(DBERROR);
            console.log(err);
        } else{
            res.json(rows);
        }
    })
});

module.exports = router;
