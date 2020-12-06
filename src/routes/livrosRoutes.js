const express = require("express")
const router = express.Router()

const controller = require("../controllers/livrosController")

router.get("/", controller.getAll);

router.get("/autor", controller.getByAuthor);

router.get("/titulo", controller.getByTitle);

router.get("/gatilho", controller.getByTrigger);

router.get("/temgatilho", controller.getHasTrigger);

router.get("/naotemgatilho", controller.getDoesntHasTrigger);

router.post("/cadastro", controller.createBook);

//router.patch("/gatilho/:id")

router.get("/:id", controller.getById);

router.delete("/:id", controller.deleteBook);

module.exports = router;
