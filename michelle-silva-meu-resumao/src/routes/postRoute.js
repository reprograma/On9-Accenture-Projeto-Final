const express = require("express")
const router = express.Router()
const controller = require("../controllers/postController")
const authMiddleware = require("../middlewares/auth")

router.get("/todos", controller.getAll)
router.get("/materia", controller.getByMateria)
router.get("/assunto", controller.getByAssunto)
router.get("/:id", controller.getByID)
router.get("/tags/:tag", controller.getByTags)

router.use(authMiddleware);
router.post("/criar", controller.createPost)
router.put("/atualizar", controller.updatePost)
router.patch("/atualizartitulo", controller.updateTitulo)


module.exports = router