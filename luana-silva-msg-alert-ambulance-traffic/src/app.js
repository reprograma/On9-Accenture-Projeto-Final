const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/alertamb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//routes
const index = require("./routes/index");
const ambulances = requre("./routes/ambulance");
const agentTransits = require("./routes/transitAgent");
const sessions = require("./routes/sessionsRoute");

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
app.use("agents", agents);
app.use("/sessions", sessions);

module.exports = app;
