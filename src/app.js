const express = require("express")
const bodyParser = require('body-parser')
const app = express()

const mongoose = require('mongoose');
mongoose.connect(`${process.env.DATABASE}`, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const booksRoutes = require("./routes/livrosRoutes")

app.use(express.json())

app.use("/alertaDeGatilho", booksRoutes)

module.exports = app