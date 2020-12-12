const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth')

router.post("/", controller.accessToken)

//@endpoint http://localhost:8080/user/getUser
router.get('/', userController.getAllUser)

//@endpoint http://localhost:8080/user/createUser
router.post('/create', userController.createUser)

//@endpoint http://localhost:8080/user/singUp
router.post('/singUp', userController.signUp)

router.use(authMiddleware)

//@endpoint http://localhost:8080/user/delete
router.delete('/delete/:id', userController.deleteUser)

module.exports = router;