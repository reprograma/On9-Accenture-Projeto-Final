
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controllers');

router.post("/", authController.auth);
module.exports = router;