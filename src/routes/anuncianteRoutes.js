const express = require('express');
const anuncianteController = require('../controller/anuncianteController');
const router = express.Router();

router.post('/cadastrar', anuncianteController.salvarAnunciante);

module.exports = router;