const express = require('express');
const anuncianteController = require('../controller/anuncianteController');
const router = express.Router();
const authMiddleware = require('../middlewares/autenticacao');

router.post('/cadastrar', anuncianteController.salvarAnunciante);

router.use(authMiddleware);

router.get('/', anuncianteController.obterTodos);

router.put('/:id', anuncianteController.atualizarAnunciante);

router.delete('/:id', anuncianteController.deletarAnunciante);

module.exports = router;