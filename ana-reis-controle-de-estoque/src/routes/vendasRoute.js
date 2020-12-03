const express =  require("express") 
const router =  express.Router(); 

const controller = require("../controllers/vendasController")

/**
@route GET vendas
@desc Retorna todas as vendas
@access Public 
@endpoint http://localhost:8080/vendas/
**/
router.get("/", controller.getAll)

/**
@route POST vendas/:id
@desc Emitir um pedido
@access Public 
@endpoint http://localhost:8080/vendas/add
**/
router.post("/add", controller.emitirPedido)

module.exports = router;


