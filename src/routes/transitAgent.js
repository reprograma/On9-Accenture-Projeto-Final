const express = require("express");
const router = express.Router();
const controller = require("../controllers/transitAgent");
const authMiddleware = require("../middlewares/auth");

//@route GET
//router.get("/", controller.get)

//@route POST 
router.post("/create", controller.postCreateAgent)
//router.postCreateNewMessageAmbulance("")
//router.use(authMiddleware);
//router.get("/dataMessage", controller.getData)
//router.get("/:id", controller.getById)

module.exports = router