const authcontroller = require("../controllers/authController")
const express = require("express")
const router = express.Router()
require('mongoose')

router.post("/register", authcontroller.CreateUser)


module.exports = router