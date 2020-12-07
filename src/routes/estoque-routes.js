const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoque-controllers')

/**
 * GET obterProduto
 * desc Retorna todos os produtos
 */
router.get('/', estoqueController.obterTodosProduto);

/**
 * GET obterProduto
 * desc Retorna o produto por id
 */
router.get('/:id', estoqueController.obterProdutoPorId);

/**
 * POST entradaEstoque
 * desc Criar uma entrada de produto
 */
router.post('/', estoqueController.entradaEstoque);

/**
 * PUT atualizar entradaEntradaEstoque
 * desc Atualizar o produto
 */
router.put('/:id', estoqueController.atualizarEstoque);

/**
 * PATCH atualizar entradaEntradaEstoque
 * desc Atualizar o produto
 * Criar função lá no controllers
 */
router.patch('/:id', estoqueController.atualizarQuantidadeEstoque);

/**
 * DELETE deleta entradaEntradaEstoque
 * desc Excluir o produto
 */
router.delete('/:id', estoqueController.excluirEstoque);

module.exports = router