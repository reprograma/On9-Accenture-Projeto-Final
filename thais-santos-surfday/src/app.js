const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/surfday',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const index = require('./routes/index')
const eventRoute = require('./routes/eventRoute')
const userController = require('./controllers/userController')
const userRoute = require('./routes/userRoute')

app.use(express.json())

app.use('/', index)
app.use('/events', eventRoute)
app.use('/users', userRoute)


module.exports = app