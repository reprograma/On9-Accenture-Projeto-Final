const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/", userController.getAll)

//@endpoint http://localhost:8080/user/register
router.post('/register', userController.register)

//@endpoint http://localhost:8080/user/signup
router.post('/signup', userController.signup)


module.exports = router;