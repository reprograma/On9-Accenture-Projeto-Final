const express = require("express")
const router = express.Router()
const controller = require("../controller/financasController")

router.get("/", controller.getAll)

module.exports = router