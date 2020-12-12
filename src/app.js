const express = require("express")
const app = express()
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()


app.use(express.json())

mongoose.connect(`${process.env.DATABASE}`, 
{ 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true 
})
    .then(x => console.log(`Connected to mongo Database name "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

const hostingRoutes = require("./routes/hostingRoutes")
const userRoutes = require("./routes/userRoutes")
const authUserRoutes = require("./routes/authUserRoutes")



app.use('/api/auth', authUserRoutes)
app.use('/api/hosting', hostingRoutes);
app.use('/api/user', userRoutes);



app.get("/", (request, response) => {
    response.send("Bem-vindo ao Viajante Sobre Rodas!")
})

module.exports = app