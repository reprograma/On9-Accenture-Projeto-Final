const express = require('express')
const router = express.Router()

router.get("/", function(request, response){
    response.status(200).json({
        title: "Direitos das mulheres Tech",
        version: "1.0.0",
        mensage: "Um api para propagar conhecimento jurídico trabalhista às mulheres que trabalham com tecnologia ou para quem deseja conhecer os direitos antes de realizar a transição de carreira."
    })
})

module.exports = router
