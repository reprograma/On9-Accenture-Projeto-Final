const controller = require("../controllers/hostingController")
const express = require("express")
const router = express.Router()
require('mongoose')

//@route GET Hosting
//@descrição Retornar todas as hospedagens
//@access Public
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/hosting
router.get("/all", controller.allHostings)

//@route GET Hosting
//@descrição Retornar as hospedagens de um estado específico
//@access Public
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/hosting/state/:state
router.get("/state/:state", controller.getByState)

//@route GET Hosting
//@descrição Retornar as hospedagens de uma cidade específica
//@access Public
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/hosting/city/:cidade
router.get("/city/:city", controller.getByCity) //quando era Id passado pelo postman, na rota ficava /:id, com cidade é o mesmo?

//@route POST Hosting
//@descrição Criar uma hospedagem
//@access Public (temporariamente)
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/hosting/createhosting
router.post("/createhosting", controller.createHosting)

//@route PUT Hosting
//@descrição Atualizar uma hospedagem
//@access Public (temporariamente)
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/hosting/updatehosting/:id
router.put("/updatehosting/:id", controller.updateHosting)

//@route DELETE Hosting
//@descrição Apagar uma hospedagem
//@access Public (temporariamente)
//@endpoint https://viajante-sobre-rodas.herokuapp.com/api/hosting/deletehosting/:id
router.delete("/deletehosting/:id", controller.deleteHosting)

module.exports = router
