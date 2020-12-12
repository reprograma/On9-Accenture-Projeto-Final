const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`${process.env.DATABASE}`, 
{
  useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
})
.then(() => {
  console.log('MONGODB Connected');
})
.catch(err => { console.log(err) })

//rotas
const index = require("./routes/index")
const rightsRoute = require("./routes/rightsRoute")
const usersRoute = require("./routes/userRoute")


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
app.use("/rights", rightsRoute)
app.use("/users", usersRoute)

module.exports = app


