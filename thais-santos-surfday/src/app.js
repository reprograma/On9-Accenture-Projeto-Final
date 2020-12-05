const express = require('express')
const app = express()

const index = require('./routes/index')
const eventRoute = require('./routes/eventRoute')
//const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use('/', index)
app.use('/events', eventRoute)


module.exports = app