const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()


mongoose.connect(process.env.DATABASE_URL,
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log('mongoDB conectado')
    })
    .catch((error) => {
        console.log('nao foi possivel conectar ao mongo')
    })



//rotas
const index = require('./routes/index')
const eventRoute = require('./routes/eventRoute')
//const userController = require('./controllers/userController')
const userRoute = require('./routes/userRoute')
const sessionRoute = require('./routes/sessionRoute')

app.use(express.json())

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
})

app.use('/', index)
app.use('/events', eventRoute)
app.use('/users', userRoute)
app.use("/session", sessionRoute)


module.exports = app