
const express = require('express')
const app = require('../app')
const router = express.Router()

router.get('/', function(req, res){
    res.status(200).send({
        name: "api surfday",
        versao: "1.0.0"
    })
})

module.exports = router