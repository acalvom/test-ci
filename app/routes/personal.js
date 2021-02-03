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

router.get('/personal/:dni', (req, res) => {
    var dni = req.params.dni;
    var sql = 'SELECT * FROM personal WHERE dni = ?';
    connection.query(sql, [dni], function (err, rows) {
        if(err){
            res.json(DBERROR);
            console.log(err);
        } else{
            res.json(rows);
        }
    })
});

router.post('/personal/dni', (req, res) => {
    //res.send("Post Query");
    let dni = req.body.dni;
    console.log(dni);
    let sql = 'SELECT * FROM personal WHERE dni = ?';
    connection.query(sql, [dni], function (err, rows) {
        if(err){
            res.json(DBERROR);
            console.log(err);
        } else{
            res.json(rows);
        }
    })
});

module.exports = router;
