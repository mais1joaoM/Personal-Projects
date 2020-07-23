const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'Node-JS',
        description: 'Teste models node',
        url: 'www.google.com'
    })


    return res.send('hello world')
});

app.listen(3001);