const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoque-controllers')

/**
 * GET obterProduto
 * desc Retorna todos os produtos
 */
router.get('/estoque', estoqueController.obterTodosProduto);

/**
 * GET obterProduto
 * desc Retorna o produto por id
 */
router.get('/estoque/:id', estoqueController.obterProdutoPorId);

/**
 * POST entradaEstoque
 * desc Criar uma entrada de produto
 */
router.post('/estoque', estoqueController.entradaEstoque);

/**
 * PUT atualizar entradaEntradaEstoque
 * desc Atualizar o produto
 */
router.put('/estoque/:id', estoqueController.atualizarEntradaEstoque);

/**
 * DELETE deleta entradaEntradaEstoque
 * desc Excluir o produto
 */
router.delete('/estoque/:id', estoqueController.excluirEstoque);


module.exports = router