const express = require('express')
const app = express()


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/AbrigueUmMiau',
{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

const index = require('./routes/index')
const home = require('./routes/home')
const cat = require('./routes/cat')


app.use(express.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use('/index', index)
app.use("/home", home)
app.use("/cat", cat)

module.exports = app
