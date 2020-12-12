const express = require('express')
const router = express.Router()
const restauranteController = require('../controllers/restaurantes')
const authMiddleware = require('../middlewares/auth')

// @route GET api/restaurantes
// @desc retorna todos os restaurantes cadastrados
// @access Public
router.get('/', restauranteController.todosRestaurantes)

// @route GET api/restaurantes
// @desc retorna o restaurante pelo id
// @access Public
router.get('/:id', restauranteController.restaurantePorId)

// @route PATCH api/restaurantes
// @desc adiciona comentários ao restaurante
// @access Public
router.patch('/comentar/:id', restauranteController.adicionarComentario)

router.use(authMiddleware)

// @route POST api/restaurante/cadastro
// @desc cadastrar usuário
// @access Public
router.post('/cadastro', restauranteController.cadastroRestaurante)



module.exports = router
