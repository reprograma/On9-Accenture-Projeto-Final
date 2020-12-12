const express = require("express")
const app = express()
const mongoose = require('mongoose');
const dotenv =  require('dotenv');

dotenv.config(); 

mongoose.connect(`${process.env.dataBaseUrl}`, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const restautentes = require('./routes/restaurantes')
const usuarios = require('./routes/usuarios')
const sessions = require('./routes/sessionRouter')

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept"
    )
    next()
})

app.use("/restaurantes", restautentes)
app.use("/usuarios", usuarios)
app.use("/token", sessions )

module.exports = app