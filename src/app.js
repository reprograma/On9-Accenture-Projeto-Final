const express = require('express');
const mongoose = require('mongoose');
const app = express();

const healthClinicRoutes = require('./routes/healthClinicRoutes.js');
const vaccinesRoutes = require('./routes/vaccineRoutes.js');
const sessionRoutes = require('./routes/sessionRoutes.js');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(`${process.env.MONGO_URI}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('MONGODB Connected');
    })
    .catch(err => { console.log(err) })


app.use(express.json());

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


app.use('/health-clinics', healthClinicRoutes);
app.use('/vaccines', vaccinesRoutes);
app.use('/admin', sessionRoutes);

module.exports = app;