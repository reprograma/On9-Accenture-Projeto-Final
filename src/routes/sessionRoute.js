const express = require("express")
const router = express.Router()
const controller = require("../controllers/sessionController")
//const authMiddleware = require('../middlewares/auth')


router.post("/login", controller.accessToken)
//router.use(authMiddleware);


module.exports = router
