const express = require("express")
const router = express.Router()
const controller = require("../controllers/postController")
const authMiddleware = require("../middlewares/auth")

router.get("/todos", controller.getAll)
router.get("/materia", controller.getByMateria)
router.get("/assunto", controller.getByAssunto)
router.get("/materia", controller.getByMateria)
router.get("/materia", controller.getByID)
router.get("/tags", controller.getByTags)
router.put("/atualizar", controller.updatePost)
router.patch("atualizartitulo", controller.updateTitulo)
router.post("/criar", controller.createPost)
router.use(authMiddleware);

module.exports = router