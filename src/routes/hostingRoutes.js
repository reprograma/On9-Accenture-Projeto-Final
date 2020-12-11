const controller = require("../controllers/hostingController")
const express = require("express")
const router = express.Router()
require('mongoose')

router.get("/state/:state", controller.getByState)

router.get("/city/:city", controller.getByCity) //quando era Id passado pelo postman, na rota ficava /:id, com cidade é o mesmo?

router.post("/createhosting", controller.createHosting)

module.exports = router
