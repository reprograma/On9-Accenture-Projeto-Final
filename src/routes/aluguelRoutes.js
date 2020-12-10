const express = require('express');
const aluguelController = require('../controller/aluguelController');
const router = express.Router();

router.post('/alugar', aluguelController.Alugar);

module.exports = router;