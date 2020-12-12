const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria");

/**
@route GET categorias
@desc Retornar todas as categorias
@access Public 
@endpoint http://localhost:porta/categorias/all
**/
router.get("/", categoriaController.getAll);

/**
@route GET categorias/:id
@desc Retornar apenas uma única categoria pelo seu id: 
@access Public 
@endpoint http://localhost:porta/categorias/:id
**/
router.get("/:id", categoriaController.getById);

/**
@route POST categorias
@desc Criar uma nova categoria
@access Public 
@endpoint http://localhost:porta/categorias/new
**/
router.post("/new", categoriaController.criarCategoria);

/**
@route PUT categorias
@desc Atualizar uma categoria
@access Public 
@endpoint http://localhost:porta/categorias/editar/:id
**/
router.put("/editar/:id", categoriaController.atualizarCategoria);

/**
@route DELETE categorias
@desc Deletar uma categoria pelo seu id
@access Public 
@endpoint http://localhost:porta/categorias/:id
**/
router.delete("/:id", categoriaController.deletarCategoria);

module.exports = router;
