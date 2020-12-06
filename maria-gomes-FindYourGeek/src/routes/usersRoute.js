const express = require('express')
const router = express.Router()
const controller = require("../controllers/usersControllers")

router.get("/", controller.getAll)
// router.get("/:city", controller.getByCity)
// router.get("/:type", controller.getByGameType)

// router.post("/register", controller.postRegister)

module.exports = router

