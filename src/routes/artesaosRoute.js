const controller = require("../controllers/artesaoController")

const express = require("express")
const router = express.Router()

//@Router GET Artesãos
//@desc Retornar todos os artesãos
//@asc Public
//@endpoint http://localhost:5050/artesaos
router.get("/artesaos", controller.getAll)

//@Router GET Artesãos
//@Query Técnica
//@DESC Retornar apenas por técnicas
//@asc Public
//@endpoint http://localhost:5050/artesaos/:tecnica
router.get("/:tecnica", controller.getByTecnica)

//@Router POST Artesãos
//@DESC Criar tarefa
//@asc Usuário
//@endpoint http://localhost:5050/artesaos
router.post("/artesaos", controller.criarPostagem)

//@Router DELETE Artesãos
//@DESC Excluir uma postagem
//@asc Usuário
//@endpoint http://localhost:5050/artesaos/:tecnica
router.delete("/artesaos/:id", controller.deletarPostagem)

module.exports = router