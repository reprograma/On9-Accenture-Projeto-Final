const controller = require("../controllers/hostingController")
const express = require("express")
const router = express.Router()
require('mongoose')

//@route GET Hosting
//@descrição Retornar todas as Postagens
//@access Public
//@endpoint http://localhost:porta/api/hosting/all
router.get("/all", controller.allHostings)

router.get("/state/:state", controller.getByState)

router.get("/city/:city", controller.getByCity) //quando era Id passado pelo postman, na rota ficava /:id, com cidade é o mesmo?

router.post("/createhosting", controller.createHosting)

router.put("/updatehosting/:id", controller.updateHosting)

router.delete("/deletehosting/:id", controller.deleteHosting)

module.exports = router
