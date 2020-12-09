const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController.js')

router.post('/register', sessionController.registerAdmin);
router.post('/signup', sessionController.accessToken);

module.exports = router;