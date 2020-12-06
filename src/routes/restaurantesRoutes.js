const controller = require("../controllers/restaurantesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

module.exports = router