const express = require('express');
const router = express.Router();
const estabelecimentoController = require('../controllers/estabelecimentoController');

/**
@route GET estabelecimento
@desc Retornar todos os estabelecimentos
@access Publico
@endpoint http://localhost:porta/estabelecimentos/
**/
router.get('/estabelecimentos', estabelecimentoController.obterEstabelecimento);

 /**
@route GET estabelecimento/cidade
@desc Retornar os estabelecimentos filtrados por cidade
@access Publico
@endpoint http://localhost:porta/estabelecimentos/cidade
**/
router.get('/estabelecimentos', estabelecimentoController.obterEstabelecimentoPorCidade);

/**
@route GET estabelecimento/tipo
@desc Retornar os estabelecimentos filtrados por tipo
@access Publico
@endpoint http://localhost:porta/estabelecimentos/tipo
**/
router.get('/estabelecimentos', estabelecimentoController.obterEstabelecimentoPorTipo);

/**
@route GET estabelecimento/nome
@desc Retornar os estabelecimentos filtrados por nome
@access Publico
@endpoint http://localhost:porta/estabelecimentos/nome
**/
router.get('/estabelecimentos', estabelecimentoController.obterEstabelecimentoPorTipo);

/**
@route POST estabelecimento/cadastro
@desc Realizar o cadastro de estabelecimento
@access Privado
@endpoint http://localhost:porta/estabelecimentos/cadastro
**/
router.get('/estabelecimentos/cadastro', estabelecimentoController.realizarCadastroEstabelecimento);

/**
 @route PATCH estabelecimentos/id
 @desc Atualizar somente o título
 @access Privado
 @endpoint http://localhost:porta/estabelecimentos/:id
 */
 router.patch('/estabelecimentos/:id', estabelecimentoController.atualizarCadastroEstabelecimento);

/**
@route DELETE estabelecimentos/id
@desc Deletar a estabelecimento
@access Privado
@endpoint http://localhost:porta/estabelecimentos/:id
**/
router.delete('/estabelecimentos/:id', estabelecimentoController.deletarEstabelecimento);


module.exports = router;