const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/autenticacao');

/**
@route POST users/cadastro
@desc Realizar o cadastro de usuário
@access Publico 
@endpoint http://localhost:porta/users/cadastro
**/
router.post('/cadastro', userController.cadastrarUser);


router.use(authMiddleware);

/**
@route DELETE users
@desc Deletar a conta
@access Privado
@endpoint http://localhost:porta/users/:id
**/
router.delete('/:id', userController.deletarUser);


module.exports = router;