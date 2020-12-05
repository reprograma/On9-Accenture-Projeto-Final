const express =  require("express") 
const router =  express.Router(); 

const controller = require("../controllers/estoqueController")

/**
@route GET produtos
@desc Retorna todos os produtos
@access Public 
@endpoint http://localhost:8080/estoque/
**/
router.get("/", controller.estoqueGeral)

/**
@route GET produtos/:id
@desc Retorna produto por id
@access Public 
@endpoint http://localhost:8080/estoque/:nomeProduto
**/
router.get("/:nomeProduto", controller.getByName);

/**
@route POST produtos/:id
@desc Cadastrar novo produto
@access Public 
@endpoint http://localhost:8080/estoque/add
**/
router.post("/add", controller.addProduto)

/**
@route PATCH false/collab/:id
@desc update collab
@access Public 
@endpoint http://localhost:8080/estoque/abastecimento
**/
router.patch("/abastecimento", controller.abastecerEstoque)

/**
@route DELETE /:id
@desc delete task
@access Public 
@endpoint http://localhost:8080/estoque/:id
**/
router.delete("/:id", controller.deletarProduto)

module.exports = router;
