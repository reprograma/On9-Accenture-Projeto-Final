const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/viajantesobrerodas', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(x => console.log(`Connected to mongo Database name "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err))

const hotels = require("./routes/hotelRoutes")

app.use("/", hotels)

module.exports = app