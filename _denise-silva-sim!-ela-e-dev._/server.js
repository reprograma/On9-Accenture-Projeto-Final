const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/relationships',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})


app.use(require('./src/routes/events_routes'));

app.listen(8080, () => console.log('server on!'));

module.exports = app;
