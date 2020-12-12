const express = require('express');
const router = express.Router();
const controller = require('../controller/sessaoController');

router.post('/anunciante', controller.accessTokenAnunciante);

router.post('/cliente', controller.accessTokenCliente);


module.exports = router;