const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/alertaDeGatilho', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const booksRoutes = require("./routes/livrosRoutes")

app.use(express.json())

app.use("/", booksRoutes)

module.exports = app