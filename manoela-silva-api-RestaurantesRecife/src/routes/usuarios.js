const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarios')

// @route POST api/usuarui/cadastro
// @desc cadastrar usuário
// @access Public
router.post('/cadastro', usuarioController.cadastroUsuario)

// @route GET api/usuario/login
// @desc retorna todos os usuários cadastrado
// @access Public
router.get('/', usuarioController.todosUsuarios)

module.exports = router
