const express = require('express');
const router = express.Router();
const controller = require("../controllers/usersControllers");

router.post("/register", controller.post);

router.get("/all", controller.getAll);

router.get("/city", controller.getByCity);

router.get("/type", controller.getByGameType);

module.exports = router;

