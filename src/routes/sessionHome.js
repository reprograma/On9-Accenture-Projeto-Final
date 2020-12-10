const express = require('express')
const router = express.Router()
const controller = require('../controllers/sessionHome')

//@route POST api/session-home
//@desc Cria um token para o usuário de lar temporário
//@acess Private
router.post('/session-home', controller.accessToken)

module.exports = router