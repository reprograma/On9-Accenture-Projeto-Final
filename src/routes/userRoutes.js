const userController = require("../controllers/userController")
const express = require("express")
const router = express.Router()
require('mongoose')

//@route POST User
//@descrição Registrar um novo usuário
//@access Public
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/user/register
router.post("/register", userController.createUser)

//@route GET User
//@descrição Retornar todos os usuários cadastrados
//@access Public (temporariamente)
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/user/all
router.get("/all", userController.allUsers)


module.exports = router