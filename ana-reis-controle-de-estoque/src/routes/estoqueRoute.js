const express =  require("express") 
const router =  express.Router() 

const controller = require("../controllers/estoqueController")

/**
@route GET produtos
@desc Retorna todos os produtos
@access Public 
@endpoint http://localhost:8080/produtos/
**/
router.get("/", controller.getAll)

/**
@route GET produtos/:id
@desc Retorna produto por id
@access Public 
@endpoint http://localhost:8080/produtos/:nomeProduto
**/
router.get("/:nomeProduto", controller.getByName);

/**
@route POST produtos/:id
@desc Cadastrar novo produto
@access Public 
@endpoint http://localhost:8080/produtos/add
**/
router.post("/add", controller.addProduto)