'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/BIdeas')
    .then(() => {
        console.log('conexion a BIdeas  kevin fue exitosa');

        //creacion del servidor
        app.listen(port, () => {
            console.log('servidor corriendo correctamente en la url servidor localhost 3700');
        })

    })
    .catch((err) => {
        console.log('error al conectar Bideas');
    });