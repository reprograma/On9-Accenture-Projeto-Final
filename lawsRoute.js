const express = require("express")
const router = express.Router()
const controller = require("../controller/lawsController")

router.get("/", controller.getAll)
router.post("/create", controller.addLaw)
router.put("/update/:id", controller.updateLaw)
router.delete("/:id", controller.deleteLaw)

module.exports = router