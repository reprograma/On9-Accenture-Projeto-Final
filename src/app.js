const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

mongoose.connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const clientes = require('./routes/clienteRoutes');
const anunciantes = require('./routes/anuncianteRoutes');
const objetos = require('./routes/objetoRoutes');
const alugueis = require('./routes/aluguelRoutes');
const sessions = require('./routes/sessaoRoute');

app.use(cors())
app.use(express.json());

/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
}); */

app.use('/cliente', clientes);
app.use('/anunciante', anunciantes);
app.use('/objeto', objetos);
app.use('/aluguel', alugueis);
app.use('/sessao', sessions);

module.exports = app;