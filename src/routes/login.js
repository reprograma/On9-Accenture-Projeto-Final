const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");
const userController = require("../controllers/user");

/**
@route POST login user
@desc Fazer login
@access Public 
@endpoint http://localhost:porta/api/signin
**/
router.post("/signin", loginController.accessToken);

/**
@route POST usuários
@desc Criar um novo usuário
@access Public 
@endpoint http://localhost:porta/api/signup
**/
router.post("/signup", loginController.signup);

module.exports = router;
