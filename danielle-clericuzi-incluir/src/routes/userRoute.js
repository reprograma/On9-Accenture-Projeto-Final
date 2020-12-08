const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
@route GET user
@desc Retornar todos os usuários
@access Privado
@endpoint http://localhost:porta/users/
**/
router.get('/users', userController.obterUser);
/**
@route POST users/cadastro
@desc Realizar o cadastro de usuário
@access Publico 
@endpoint http://localhost:porta/users/cadastro
**/
router.get('/users/cadastro', userController.realizarCadastroUser);
/**
@route POST users/login
@desc Fazer o login de usuário
@access Privado
@endpoint http://localhost:porta/users/login
**/
router.post('/users/login', userController.loginUser);
/**
@route DELETE users
@desc Deletar a conta
@access Privado
@endpoint http://localhost:porta/users/:id
**/
router.delete('/users/:id', tarefaController.deletarUser);


module.exports = router;