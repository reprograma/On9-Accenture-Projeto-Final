/**
 * Module dependencies.
 */

require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

/*
  * Conectar com o MongoDB
*/
//mongoose.connect(process.env.MONGODB_URI, {
  //useNewUrlParser: true,
 /// useUnifiedTopology: true
//});

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
//const user = require("./routes/userRoute")
//const estabelecimento = require("./routes/estabelecimentoRoute")
//const avaliacao = require("./routes/avaliacaoRoute")

/**
 * Configurar body parser
 */
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

//app.use("/user", user)
//app.use("/estabelecimento", estabelecimento)
//app.use("/avaliacao", avaliacao)

module.exports = app