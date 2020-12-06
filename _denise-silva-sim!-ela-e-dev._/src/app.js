const express = require("express");
const app = express();

const events = require("./routes/events_routes");

app.use("/events", events);

module.exports = app;
