const express =  require("express") 
const router =  express.Router(); 

const controller = require("../controllers/vendasController")

/**
@route GET venda
@desc Retorna todas as vendas
@access Public 
@endpoint http://localhost:8080/venda/
**/
router.get("/", controller.vendas)

/**
@route GET venda/:data
@desc Retorna todas as vendas do dia 
@access Public 
@endpoint http://localhost:8080/venda/:data 
**/
router.get("/data", controller.periodoVenda)

/**
@route POST venda/produto
@desc Registrar uma nova venda
@access Public 
@endpoint http://localhost:8080/venda/produto
**/
router.post("/produto", controller.vendaProduto)



/**
@route DELETE /:id
@desc delete task
@access Private 
@endpoint http://localhost:8080/venda/:id
**/
router.delete("/:id", controller.estorno)

module.exports = router;


