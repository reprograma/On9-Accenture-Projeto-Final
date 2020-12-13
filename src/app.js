const express = require("express")
const users = require("./routes/usersRoute")
const login = require('./routes/sessionRoute')
const app = express()

const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(`${process.env.DATABASE}`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    });
   /*.then(() => {
      console.log('Connected to Mongo!')
    })
    .catch( (error) => {
        console.error("Error connecting to mongo")
      });
*/

app.use(express.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/findyourgeek", users)
app.use("/fyg", login)

module.exports = app
