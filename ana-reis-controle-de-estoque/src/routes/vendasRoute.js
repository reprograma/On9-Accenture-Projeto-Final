const express =  require("express") 
const router =  express.Router(); 

const controller = require("../controllers/vendasController")

/**
@route GET vendas
@desc Retorna todas as vendas
@access Public 
@endpoint http://localhost:8080/vendas/
**/
router.get("/", controller.vendas)

/**
@route POST 
@desc Registrar uma nova venda
@access Public 
@endpoint http://localhost:8080/vendas/produto
**/
router.post("/produto", controller.vendaProduto)

module.exports = router;


