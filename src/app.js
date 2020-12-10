const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://ELIANESILVA:eliane@cluster0.edyv0.mongodb.net/AbrigueUmMiau?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('MongoDB conectado')
    })
    .catch((error)=>{
        console.log('Não foi possível se conectar ao MongoDB')
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
