const express = require("express")
const router = express.Router()
const controller = require("../controller/sessaoController")

router.post("/", controller.accessToken)

module.exports = router;