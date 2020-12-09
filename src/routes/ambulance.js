const express = require("express");
const router = express.Router();
const controller = require("../controllers/ambulance");
const authMiddleware = require("../middlewares/auth");

//router.get("/", controller.get)
router.post("/create", controller.post)
//router.postCreateNewMessageAmbulance("")
//router.use(authMiddleware);
//router.get("/dataMessage", controller.getData)
//router.get("/:id", controller.getById)

module.exports = router;
