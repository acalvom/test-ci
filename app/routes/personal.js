var connection = require('../database');
const DBERROR = "Database Server Error";

function listPersonal (req, res){
    var sql = 'SELECT * FROM personal';
    var mycon = connection;
    mycon.query(sql, function (err, rows) {
        if (err) {
            res.json(DBERROR);
            console.log(err);
        } else {
            res.json(rows);
        }
    });
}
exports.listPersonal = listPersonal;

function getPersonalByDNI (req, res){
    var dni = req.params.dni;
    var sql = 'SELECT * FROM personal WHERE dni = ?';
    connection.query(sql, [dni], function (err, rows) {
        if (err) {
            res.json(DBERROR);
            console.log(err);
        } else {
            res.json(rows);
        }
    })
}
exports.getPersonalByDNI = getPersonalByDNI;


function postPersonalByDNI (req, res){
    let dni = req.body.dni;
    console.log(dni);
    let sql = 'SELECT * FROM personal WHERE dni = ?';
    connection.query(sql, [dni], function (err, rows) {
        if (err) {
            res.json(DBERROR);
            console.log(err);
        } else {
            res.json(rows);
        }
    })
}
exports.postPersonalByDNI = postPersonalByDNI;

