/**
 * Module dependencies.
 */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");


/**
 * Routes
 */
const index = require("./routes/index");
const videos = require("./routes/video");
const categorias = require("./routes/categoria");
const perfil = require("./routes/perfil");
const admin = require("./routes/admin");
const login = require("./routes/login");
const authMiddleware = require("./middlewares/auth");
const adminMiddleware = require("./middlewares/authAdmin");

/**
 * Create Express server.
 */
const app = express();

/*
 * Conectar com o MongoDB
 */
mongoose
  .connect(`${config.stringConnection}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/**
 * Express configuration.
 */
app.set("port", config.port || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", index);
app.use("/api", login);
app.use("/api/categorias", categorias);
app.use("/api/videos", videos);
app.use("/api/perfil", authMiddleware, perfil);
app.use("/api/admin", authMiddleware, adminMiddleware, admin);

/*
 * Error Handler.
 */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server Error");
});

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(
    "%s App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
