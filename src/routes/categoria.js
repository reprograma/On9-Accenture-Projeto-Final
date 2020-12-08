const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria");

router.get("/all", categoriaController.getAll);
router.get("/:id", categoriaController.getById);

router.post("/new", categoriaController.criarCategoria);

router.put("/editar/:id", categoriaController.atualizarCategoria);

module.exports = router;
