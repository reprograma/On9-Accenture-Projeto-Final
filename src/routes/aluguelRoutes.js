const express = require('express');
const aluguelController = require('../controller/aluguelController');
const router = express.Router();
const authMiddlewares = require('../middlewares/autenticacao')

router.use(authMiddlewares)

router.get('/', aluguelController.obterAlugueis);

router.post('/alugar', aluguelController.alugar);

router.delete('/devolver/:id', aluguelController.devolver);

module.exports = router;