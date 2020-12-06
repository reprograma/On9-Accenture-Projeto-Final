const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const authMiddleware = require('../middlewares/auth')

router.post('/criar', userController.createUser)
router.use(authMiddleware)
router.get('/', userController.getUser)
router.get('/:id', userController.getUserById)
router.delete('/deletar/:id', userController.deleteUser)
module.exports = router 