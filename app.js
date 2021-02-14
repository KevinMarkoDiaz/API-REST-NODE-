'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//cargar archivo de  rutas

//middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//cors

//rutas
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'hola mundo desde API de node'
    })
});
//exportar

module.exports = app;