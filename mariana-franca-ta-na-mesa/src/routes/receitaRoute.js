const express = require ("express")
const router = express.Router()
const controller = require("../controllers/receitaamaoController")


router.get("/", controller.getAll)

router.get("/titulo", controller.getByTitle)

router.get("/ingredienteprincipal", controller.getByMainIngredient)

router.get("/tipo", controller.getByTypeFood)

router.get ("/receitaselecionada", controller.getByChoseRecipe)

router.get("/receitanaoselecionada", controller.getByNoChoseRecipe)

router.post("/cadastro", controller.createRecipe)

router.put("/editar/:id", controller.updateRecipe)

router.patch("/receitanaoselecionada/:id", controller.uptdateChosenRecipe)

router.patch("/editar/ingredientes/:id", controller.updateIngredients)

router.patch("/editar/ingredienteprincipal/:id", controller.updateMainIngredient)

router.patch("/editar/titulo/:id", controller.updateTitle)

router.patch("/editar/tiporeceita/:id", controller.updateType)

router.patch("/editar/preparo/:id", controller.updatePreparation)

router.patch ("/editar/observacoes/:id", controller.updateComment)

router.get("/:id", controller.getId)

router.delete("/:id", controller.deleteRecipe)


module.exports = router