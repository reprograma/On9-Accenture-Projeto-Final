const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost/findyourgeek', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    .then(x => console.log(`Connected to Mongo! Database name: "$(x.connections[0].name)"`))
    .catch(err => console.error("Error connecting to mongo", err));

const users = require("./routes/usersRoute")

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", users)

module.exports = app
