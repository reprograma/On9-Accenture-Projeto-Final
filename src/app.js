const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");
//mongoose.connect(`${process.env.DATABASE_URL}`, {
mongoose.connect("mongodb://localhost/alertamb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//routes
const index = require("./routes/index");
const ambulances = require("./routes/ambulance");
const agentTransits = require("./routes/transitAgent");
const messagesSend = require("./routes/message")
const sessions = require("./routes/sessionRoute");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Orign", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Typ, Accept"
  );
  next();
});

app.use("/", index);
app.use("/ambulances", ambulances);
app.use("/message", messagesSend);
app.use("/agents", agentTransits);
app.use("/sessions", sessions);

module.exports = app;
