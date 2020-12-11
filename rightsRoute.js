const express = require("express")
const router = express.Router()
const controller = require("../controller/rightsController")

router.get("/rights", controller.getAll)
router.get("/rights/user", controller.getAll)
router.post("/rights/add", controller.addRight)
router.put("/rights/:id", controller.updateRight)
router.delete("/rights/:id", controller.deleteRight)

module.exports = router
