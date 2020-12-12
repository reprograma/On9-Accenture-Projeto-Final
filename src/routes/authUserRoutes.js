const authUserController = require('../controllers/authUserController')
const express = require("express")
const router = express.Router()
require('mongoose')

router.post('/authenticate', authUserController.userAuthenticate)

module.exports = router
