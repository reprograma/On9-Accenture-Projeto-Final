const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controllers/vendasController")
const authMiddleware =  require("../middlewares/auth")





/**
@route GET venda
@desc Retorna todas as vendas
@access Public 
@endpoint http://localhost:8080/venda/
**/
router.get("/", controller.vendas)

/**
@route POST venda/produto
@desc Registrar uma nova venda
@access Public 
@endpoint http://localhost:8080/venda/produto
**/
router.post("/produto", controller.vendaProduto)


router.use(authMiddleware);

/**
@route DELETE /:id
@desc delete 
@access Private 
@endpoint http://localhost:8080/venda/:id
**/
router.delete("/:id", controller.estorno)

module.exports = router;


