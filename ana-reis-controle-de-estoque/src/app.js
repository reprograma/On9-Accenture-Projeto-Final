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
app.use("/estoque", estoqueRoute)
app.use("/vendas", vendasRoute)

module.exports = app