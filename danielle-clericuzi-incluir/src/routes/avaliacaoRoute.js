const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');
const authMiddleware = require('../middlewares/autenticacao');

/**
@route GET avaliacao/estabelecimento
@desc Retornar todas as avaliações por estabelecimento
@access Publico
@endpoint http://localhost:porta/avaliacao/
**/
router.get('/', avaliacaoController.obterAvaliacaoPorEstabelecimento);

router.use(authMiddleware);

/**
@route POST avaliacao/cadastro
@desc Realizar o cadastro de uma avaliacao para um estabelecimento
@access Privado
@endpoint http://localhost:porta/avaliacao/cadastro
**/
router.post('/cadastro', avaliacaoController.realizarCadastroAvaliacao);

/**
@route DELETE avaliacao/id
@desc Deletar a avaliacao
@access Privado
@endpoint http://localhost:porta/avaliacao/:id
**/
router.delete('/:id', avaliacaoController.deletarAvaliacao);


module.exports = router;