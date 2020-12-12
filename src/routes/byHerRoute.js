const express = require("express");
const { route } = require(".");
const router = express.Router();

const controller = require("../controller/byHerController");

router.get("/", controller.getAll);

router.get("/genre", controller.getByGenre);

router.get("/nacionality", controller.getByNacionality);

router.get("/year", controller.getByYear);

router.post("/cadastro", controller.createMovie);

router.put("/update/:id", controller.updateMovie);

router.delete("/:id", controller.deleteMovie);


module.exports = router