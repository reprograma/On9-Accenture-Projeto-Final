const express = require('express');
const app = express();

const estoque = require('./routes/estoque-routes')

app.use(express.json());
app.use('/', estoque);

module.exports = app;
