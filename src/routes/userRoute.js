const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const userController = require('../controllers/userController')


//@router POST /users
//@desc Cria um novo usuário
//@access public
router.post('/create', userController.createUser)

module.exports = router