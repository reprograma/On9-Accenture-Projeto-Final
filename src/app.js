const express = require("express");
const app = express();

const mentorRouter = require("./routes/mentorRoutes");
const mentoredRouter = require("./routes/mentoredRoutes");
const sessions = require("./routes/sessionRoute");

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/LearnShare', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/mentor", mentorRouter);
app.use("/mentored", mentoredRouter);
app.use("/sessions", sessions);

module.exports = app;