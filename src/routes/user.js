const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

/**
@route GET usuários
@desc Retornar todos os usuários
@access Public 
@endpoint http://localhost:porta/users/all
**/
router.get("/", userController.getAll);

/**
@route POST usuários
@desc Criar um novo usuário
@access Public 
@endpoint http://localhost:porta/users/new
**/
router.post("/signup", userController.signup);

module.exports = router;
