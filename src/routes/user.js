const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

/**
@route POST usuários
@desc Criar um novo usuário
@access Public 
@endpoint http://localhost:porta/api/users/signup
**/
router.post("/signup", userController.signup);

module.exports = router;
