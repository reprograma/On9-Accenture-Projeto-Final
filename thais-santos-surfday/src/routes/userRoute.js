const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')


//@router POST /users
//@desc Cria um novo usuário
//@access private
router.post('/create', userController.createUser)

module.exports = router