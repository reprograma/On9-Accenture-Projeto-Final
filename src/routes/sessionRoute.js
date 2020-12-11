const express = require("express");
const router = express.Router()
const controller = require("../controllers/sessionController");


router.post("/register", controller.adm)
router.post("/", controller.accessToken)

module.exports = router

