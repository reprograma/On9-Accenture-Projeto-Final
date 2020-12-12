
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post("/", usersController.registerUser);
router.put("/", authMiddleware, usersController.updateUser);

module.exports = router;