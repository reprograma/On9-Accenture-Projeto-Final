const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controllers/estoqueController")
const authMiddleware =  require("../middlewares/auth")


/**
@route GET estoque
@desc Retorna todos os produtos
@access Public 
@endpoint http://localhost:8080/estoque/
**/
router.get("/", controller.estoqueGeral)

/**
@route GET estoque/:nomeProduto
@desc Retorna produto pelo nome
@access Public 
@endpoint http://localhost:8080/estoque/:nomeProduto
**/
router.get("/:nomeProduto", controller.nomeProduto);

/**
@route POST estoque/add
@desc Cadastrar novo produto
@access Public 
@endpoint http://localhost:8080/estoque/cadastro
**/
router.post("/cadastro", controller.cadastroProduto)

/**
@route PATCH estoque/abastecimento
@desc Abastecer o estoque de um produto
@access Public 
@endpoint http://localhost:8080/estoque/abastecimento
**/
router.patch("/abastecimento", controller.abastecerEstoque)

router.use(authMiddleware);

/**
@route DELETE /:id
@desc Deletar um produto
@access Private 
@endpoint http://localhost:8080/estoque/:id
**/
router.delete("/:id", controller.deletarProduto)

module.exports = router;
