const authUserController = require('../controllers/authUserController')
const express = require("express")
const router = express.Router()
require('mongoose')

//@route POST User
//@descrição Autenticar login
//@access Public (temporariamente)
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/auth/authenticate
router.post('/authenticate', authUserController.userAuthenticate)

module.exports = router
