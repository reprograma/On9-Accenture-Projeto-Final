const express = require("express");
const app = express();

const mentorRouter = require("./routes/mentorRoutes");
const mentoredRouter = require("./routes/mentoredRoutes");

const mongoose = require("mongoose");
mongoose.connect(`${process.env.DATABASE_ULR}`, {
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

module.exports = app;