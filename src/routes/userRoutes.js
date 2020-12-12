const userController = require("../controllers/userController")
const express = require("express")
const router = express.Router()
require('mongoose')

//@route POST User
//@descrição Registrar um novo usuário
//@access Public
//@endpoint http://localhost:porta/api/user/register
router.post("/register", userController.createUser)


module.exports = router