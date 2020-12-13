const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controllers/sessaoController")

/**
@route POST sessao
@desc Iniciar uma sessão e gerar um token para rotas privadas
@access Public 
@endpoint http://localhost:8080/sessao
**/
router.post("/", controller.accessToken)

module.exports = router;