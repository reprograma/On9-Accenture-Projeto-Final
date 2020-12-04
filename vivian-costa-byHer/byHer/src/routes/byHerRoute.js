const express = require("express");
const router = express.Router();

const controller = require("../controller/byHerController");

router.get("/", controller.getAll)

router.post("/cadastro", controller.createMovie)


module.exports = router