const express = require("express")
const app = express()
const unless = require("express-unless")
const dotenv = require("dotenv")
dotenv.config()

const mongoose = require('mongoose');
mongoose.connect(`${process.env.DATABASE_URL}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('MongoDB conectado')
    })
    .catch((error) => {
        console.log('Não foi possível se conectar ao MongoDB')
    })

//rotas
const index = require("./routes/index")
const postagens = require("./routes/postRoute")
const sessions = require("./routes/sessionRoute")
const user = require("./routes/userRoute")

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
app.use("/meuresumao/usuarios", user)

module.exports = app
