const express = require ("express")
const router = express.Router()
const controller = require("../controllers/receitaamaoController")


router.get("/", controller.getAll)

router.get("/titulo", controller.getByTitle)

router.get("/ingrediente", controller.getByingredient)

router.get("/tipo", controller.getByTypeFood)

router.post("/cadastro", controller.createRecipe)

router.put("/editar/:id", controller.updateRecipe)

router.patch("/editar/ingredientes/:id", controller.updateIngredients)

router.get("/:id", controller.getId)

router.delete("/:id", controller.deleteRecipe)


module.exports = router