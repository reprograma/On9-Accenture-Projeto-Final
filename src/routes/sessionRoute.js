const express =  require('express')
const router = express.Router()
const controller = require('../controllers/sessionController')
const userController = require('../controllers/userController')

//router.post('/register', controller.registerUser)
router.post('/create', userController.createUser)
router.post('/login', controller.accessToken)

module.exports = router