const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/byHer',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const toDoRoutes = require("./routes/byHerRoute");

app.use(express.json());

app.use("/movies", toDoRoutes,);

module.exports = app