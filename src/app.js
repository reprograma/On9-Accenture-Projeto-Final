const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`${process.env.DATABASE_URL}`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const toDoRoutes = require("./routes/byHerRoute");
const index = require("./routes/index");


app.use(express.json());

app.use("/movies", toDoRoutes,);
app.use("/", index);


module.exports = app