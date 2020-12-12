const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

/**
@route POST users/login
@desc Fazer o login de usuário
@access Publico
@endpoint http://localhost:porta/users/login
**/
router.post('/login', sessionController.loginUser);

module.exports = router;