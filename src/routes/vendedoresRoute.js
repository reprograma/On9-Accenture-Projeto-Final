const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controllers/vendedoresController")

/**
@route GET 
@desc Retorna todas as vendas
@access Public 
@endpoint http://localhost:8080/vendedor
**/
router.get("/", controller.vendedores)

/**
@route GET 
@desc Retorna todas as vendas
@access Public 
@endpoint http://localhost:8080/venda/:nome
**/
router.get("/:nome", controller.nomeVendedor)

/**
@route POST ACESSO VENDEDORX
@desc Registrar uma nova venda
@access Public 
@endpoint http://localhost:8080/venda/novoVendedor
**/
router.post("/cadastro", controller.novoVendedor)

/**
@route DELETE /:id
@desc delete 
@access Private 
@endpoint http://localhost:8080/vendedor/desligamento/:id
**/
router.delete("/desligamento/:id", controller.desligamento)

module.exports = router;