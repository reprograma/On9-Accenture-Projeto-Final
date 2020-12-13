const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controllers/vendedoresController")
const authMiddleware =  require("../middlewares/auth")

/**
@route GET 
@desc Retorna todos(as) os vendedores(as) cadastrados(as)
@access Public 
@endpoint http://localhost:8080/vendedor
**/
router.get("/", controller.vendedores)

/**
@route GET vendedor/:nome
@desc Retorna o(a) vendedor(a)
@access Public 
@endpoint http://localhost:8080/vendedor/:nome
**/
router.get("/:nome", controller.nomeVendedor)

/**
@route POST vendedor/cadastro
@desc Cadastrar um(a) novo(a) vendedor(a)
@access Public 
@endpoint http://localhost:8080/vendedor/cadastro
**/
router.post("/cadastro", controller.novoVendedor)

router.use(authMiddleware);

/**
@route DELETE /:id
@desc Desligar um(a) vendedor(a) 
@access Private 
@endpoint http://localhost:8080/vendedor/desligamento/:id
**/
router.delete("/desligamento/:id", controller.desligamento)

module.exports = router;