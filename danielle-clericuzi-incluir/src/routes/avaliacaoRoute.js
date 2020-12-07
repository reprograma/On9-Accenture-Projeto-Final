const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

/**
@route GET avaliacao/estabelecimento
@desc Retornar todas as avaliações por estabelecimento
@access Publico
@endpoint http://localhost:porta/avaliacao/estabelecimento
**/
router.get('/avaliacao/estabelecimento', avaliacaoController.obterAvaliacaoPorEstabelecimento);

 /**
@route GET avaliacao/user
@desc Retornar as avaliações realizadas por aquele usuario
@access Privado
@endpoint http://localhost:porta/avaliacao/user
**/
router.get('/avaliacao/user', avaliacaoController.obterAvaliacaoPorUsuario);

/**
@route POST avaliacao/cadastro
@desc Realizar o cadastro de uma avaliacao para um estabelecimento
@access Publico
@endpoint http://localhost:porta/avaliacao/cadastro
**/
router.get('/avaliacao/cadastro', avaliacaoController.realizarCadastroAvaliacao);


/**
@route DELETE avaliacao/id
@desc Deletar a avaliacao
@access Privado
@endpoint http://localhost:porta/avaliacao/:id
**/
router.delete('/avaliacao/:id', avaliacaoController.deletarAvaliacao);


module.exports = router;