const express = require('express')
const router = express.Router()
const controller = require('../controllers/login')

router.post("/", controller.accessToken)

module.exports = router