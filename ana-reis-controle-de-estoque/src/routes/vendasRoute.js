const express =  require("express") 
const router =  express.Router(); 

const controller = require("../controllers/vendasController")

/**
@route GET produtos
@desc Retorna todos os produtos
@access Public 
@endpoint http://localhost:8080/produtos/
**/
router.get("/", controller.getAll)

module.exports = router;


