const express = require('express');
const clienteController = require('../controller/clienteController');
const router = express.Router();
const authMiddleware = require('../middlewares/autenticacao');

router.post('/cadastrar', clienteController.salvarCliente);

router.use(authMiddleware);

router.get('/', clienteController.obterTodos);

router.put('/atualizar/:id', clienteController.atualizarCliente);

router.delete('/:id', clienteController.deletarCliente);

module.exports = router;