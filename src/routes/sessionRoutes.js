const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController.js')

router.post('/register', sessionController.registerAdmin);
router.post('/signin', sessionController.accessToken);

module.exports = router;