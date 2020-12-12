const express = require('express')
const router = express.Router()

//@route GET api/
//@desc Mostra boas vindas a API
//@acess Public
router.get('/', function (request, response){
    response.status(200).send({
        title: "Abrigue um Miau",
        version: "1.0",
        message: "Sejam todos bem vindes!"
    })
})

module.exports = router