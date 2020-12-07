const express = require("express");
const router = express.Router();

router.get("/", function (request, response){
    response.status(200).send({
        titulo: "Projeto Final Reprograma Vivian Costa",
        versao: "1.0.0",
        mensagem: "serase vai"
    })
})

module.exports = router