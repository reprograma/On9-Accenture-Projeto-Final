const express = require("express")
const router = express.Router()

router.get("/", function(request,response){
    response.status(200).send({
        titulo: "Prisma educação financeira",
        version:"1.0.0"
    })
})

router.get


module.exports = router