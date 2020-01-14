const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/route');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(router);


app.use(express.static('./public'));

app.listen(3000);