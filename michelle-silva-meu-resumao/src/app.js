const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meuresumao',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

//rotas
const index = require("./routes/index")
const postagens = require("./routes/postRoute")
const sessions = require("./routes/sessionRoute")


app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/meuresumao", index, postagens, sessions)
//app.use("/meuresumao", postagens)
//app.use("/meuresumao", sessions)

module.exports = app
