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

const index = require("./routes/index");
const toDoRoutes = require("./routes/byHerRoute");

app.use(express.json());

app.use("/", index);
app.use("/movies", toDoRoutes,);

module.exports = app