const express = require('express')
const router = express.Router()

router.get('/', function (request, response){
    response.status(200).send({
        title: "Abrigue um Miau",
        version: "1.0",
        message: "Sejam todos bem vindes!"
    })
})

module.exports = router