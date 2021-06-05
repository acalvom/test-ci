require('dotenv').config();
const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
cors = require('cors');

const bodyParser = require('body-parser');
var personal = require ('./app/routes/personal');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.options('*', cors());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/personal', personal.listPersonal);
app.get('/personal/:dni', personal.getPersonalByDNI);
app.post('/personal/dni', personal.postPersonalByDNI);

// Start the server
app.listen(port, function() {
    console.log("Node Server at " + port);
    console.log("Hora: " + Date());
});

module.exports = app;
