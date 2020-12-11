const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController')

//@route POST
//@desc Efetuar a entrada/sessão de algum usuário no sistema
//@access Public
//endpoint http://localhost:8080/sessions/
router.post('/', sessionController.accessToken)

module.exports = router;