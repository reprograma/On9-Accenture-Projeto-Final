const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//retornar todos usuários registrados
//@endpoint http://localhost:porta/users/
//@access Privado
router.get('/users', userController.getUser);


//realizar o cadastro do usuário na API
//@endpoint http://localhost:porta/users/register
//@access Publico 
router.get('/users/register', userController.registerUser);


//@route POST users/register
//@desc Realizar o cadastro de usuário
//@access Publico 
//@endpoint http://localhost:porta/users/register
router.get('/users/register', userController.doRegisterUser);


/* @route POST users/login
@desc Fazer o login de usuário
@access Privado
@endpoint http://localhost:porta/users/login */
router.post('/users/login', userController.loginUser);


/* @route PATCH users
 @desc Atualizar os dados do registro
 @access Privado
 @endpoint http://localhost:porta/users/:id */
 router.put('/users/:id', userController.putUser);

/*  @route DELETE users
 @desc Deletar o registro do usuário
 @access Privado
 @endpoint http://localhost:porta/tarefas/:id */
 router.delete('/users/:id', tarefaController.deleteUser);


module.exports = router;
