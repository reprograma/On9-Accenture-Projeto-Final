const express = require('express');
const app = express();

const healthClinicRoutes = require('./routes/healthClinicRoutes.js');
const vaccinesRoutes = require('./routes/vaccineRoutes.js');
const sessionRoutes = require('./routes/sessionRoutes.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/AquiTemVacina',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


app.use(express.json());

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


app.use('/unidades-de-saude', healthClinicRoutes);
app.use('/vacinas', vaccinesRoutes);
app.use('/admin', sessionRoutes);

module.exports = app;