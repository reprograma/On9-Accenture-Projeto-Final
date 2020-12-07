const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController.js')

router.post('/cadastro', sessionController.registerAdmin);

module.exports = router;