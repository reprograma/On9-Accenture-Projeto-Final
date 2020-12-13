const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria");

/**
@route GET categorias
@desc Retornar todas as categorias
@access Public 
@endpoint http://localhost:porta/api/categorias
**/
router.get("/", categoriaController.getAll);

/**
@route GET categorias/:id
@desc Retornar apenas uma única categoria pelo seu id: 
@access Public 
@endpoint http://localhost:porta/api/categorias/:id
**/
router.get("/:id", categoriaController.getById);

module.exports = router;
