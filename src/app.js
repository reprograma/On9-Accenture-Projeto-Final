/**
 * Module dependencies.
 */

require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

/*
  * Conectar com o MongoDB
*/
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

/*
  * Tratamento do retorno da conexão
*/
db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function (){
  console.log("conexão feita com sucesso.");
})

/**
 * Routes
 */
const users = require('./routes/userRoute');
const estabelecimentos = require('./routes/estabelecimentoRoute');
const avaliacoes = require('./routes/avaliacaoRoute');
const sessions = require("./routes/sessionRoute");


app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

app.use('/users', users);
app.use('/estabelecimentos', estabelecimentos);
app.use('/avaliacao', avaliacoes);
app.use('/sessions', sessions);

module.exports = app;