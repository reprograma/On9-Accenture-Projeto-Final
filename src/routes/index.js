const express = require('express');
const app = require('../app');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        name: "API Alugue Aí",
        versao: "1.0"
    })
});

module.exports = router;