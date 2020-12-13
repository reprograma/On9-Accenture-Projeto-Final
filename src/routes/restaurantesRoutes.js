const controller = require("../controllers/restaurantesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/culinaria", controller.getCulinaria)
router.post("/create", controller.createRestaurante)
router.put("/update/:id", controller.putRestaurante)
router.patch("/updatec/:id", controller.atualizaCulinaria)
router.patch("/updatel/:id", controller.atualizaLocalizacao)
router.delete("/delete/:id", controller.deleteRestaurante)
router.get("/:id", controller.getById)


module.exports = router;