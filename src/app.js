const express = require("express")
const app = express() 

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Controle", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const estoqueRoute = require("./routes/estoqueRoute")
const vendasRoute = require("./routes/vendasRoute")

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

module.exports = app