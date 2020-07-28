const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });

requireDir('./src/models');

//const Product = mongoose.model('Product');

app.use('/api', require("./src/routes"));

app.listen(3001);