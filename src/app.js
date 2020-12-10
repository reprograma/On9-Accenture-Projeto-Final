const express = require("express");
const app = express();

const mentorRouter = require("./routes/mentorRoutes");
const mentoredRouter = require("./routes/mentoredRoutes");
const opportunityRouter = require("./routes/opportunityRoutes");

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/LearnShare', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use(function(request, response, next) {
    response.header("Acess-Control-Allow-Origin", "*")
    response.header(
        "Acess-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/mentor", mentorRouter);
app.use("/mentored", mentoredRouter);
app.use("/opportunity", opportunityRouter);

module.exports = app;