const restaurante = require("./routes/restaurantesRoutes")
const express = require("express")
const app = express()

const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(`${process.env.DATABASE}`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})


app.use("/restaurantes", restaurante)

module.exports = app