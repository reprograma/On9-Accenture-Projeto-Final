require('dotenv').config();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const eventRoutes = require("./src/routes/events_routes");
const usersRoutes = require("./src/routes/users_routes");
const authRoutes = require("./src/routes/auth_routes");
const { response } = require("express");
const authMiddleware = require("./src/middleware/authMiddleware");

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.use(authMiddleware);

app.use('/events', eventRoutes);



app.listen(process.env.PORT || 80, () => console.log("server on!"));

module.exports = app;
