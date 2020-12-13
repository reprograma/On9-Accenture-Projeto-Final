const express = require('express');
const app = require('../app');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send({
        name: "API Alugue Aí",
        vesao: "1.0"
    })
});