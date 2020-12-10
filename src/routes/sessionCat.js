const express = require('express')
const router = express.Router()
const catController = require('../controllers/sessionCat')

//@route POST api/session-cat
//@desc Cria um token para o usuário de gato
//@acess Private
router.post('/session-cat', catController.createToken)

module.exports = router