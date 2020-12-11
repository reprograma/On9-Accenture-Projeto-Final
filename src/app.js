const express = require("express")
const bodyParser = require('body-parser')
const app = express()

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`${process.env.MONGO}`, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const booksRoutes = require("./routes/livrosRoutes")

app.use(express.json())

app.use("/", booksRoutes)

module.exports = app