const express = require("express")
const router = express.Router()
const controller = require("../controllers/ambulance")
const authMiddleware = require("../middlewares/auth")

router.get("/", controller.get)
router.post("/", controller.post)
//router.postCreateNewMessageAmbulance("")
router.use(authMiddleware);
router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)

module.exports = router