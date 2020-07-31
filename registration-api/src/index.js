const express = require('express');
const bodyParser = require('body-parser');
//const requireDir = require('require-dir');
//const mongoose = require('mongoose');
//const requireDir = require('require-dir');

const app = express();

//app.use(express.json);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.listen(3001);
