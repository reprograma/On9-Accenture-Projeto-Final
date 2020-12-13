const express = require("express")
const app = express() 
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`${process.env.DATABASE}`,//"mongodb://localhost/Controle", //
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

const estoqueRoute = require("./routes/estoqueRoute")
const vendasRoute = require("./routes/vendasRoute")
const vendedorRoute = require ("./routes/vendedoresRoute")
const sessao = require("./routes/sessaoRoute");

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })
  
app.use("/estoque", estoqueRoute)
app.use("/venda", vendasRoute)
app.use("/sessao", sessao)
app.use("/vendedor", vendedorRoute)

module.exports = app

