const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const bodyParser = require("body-parser");

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mentorRouter = require("./routes/mentorRoutes");
const mentoredRouter = require("./routes/mentoredRoutes");
const opportunityRouter = require("./routes/opportunityRoutes");

app.use("/mentor", mentorRouter)
app.use("/mentored", mentoredRouter)
app.use("/opportunity", opportunityRouter)

module.exports = app;
