const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`$ {process.env.DATABASE}`, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//rotas
const index = require("./routes/index")
const rightsRoute = require("./routes/rightsRoute")
const usersRoute = require("./routes/usersRoute")


app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/rights", rights)
app.use("/users", users)

module.exports = app


