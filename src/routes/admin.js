const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");
const categoriaController = require("../controllers/categoria");
const userController = require("../controllers/user");

/* *** VÍDEOS *** */

/**
@route POST vídeos
@desc Criar um novo vídeo
@access Private 
@endpoint http://localhost:porta/api/admin/videos/new
**/
router.post("/videos/new", videoController.criarVideo);

/**
@route PUT vídeos
@desc Atualizar um vídeo
@access Private 
@endpoint http://localhost:porta/api/admin/videos/editar/:id
**/
router.put("/videos/editar/:id", videoController.atualizarVideo);

/**
@route DELETE vídeos
@desc Deletar um vídeo pelo seu id
@access Private 
@endpoint http://localhost:porta/api/admin/videos/:id
**/
router.delete("/videos/:id", videoController.deletarVideo);

/* *** CATEGORIAS *** */

/**
@route POST categorias
@desc Criar uma nova categoria
@access Private 
@endpoint http://localhost:porta/api/admin/categorias/new
**/
router.post("/categorias/new", categoriaController.criarCategoria);

/**
@route PUT categorias
@desc Atualizar uma categoria
@access Private 
@endpoint http://localhost:porta/api/admin/categorias/editar/:id
**/
router.put("/categorias/editar/:id", categoriaController.atualizarCategoria);

/**
@route DELETE categorias
@desc Deletar uma categoria pelo seu id
@access Private 
@endpoint http://localhost:porta/api/admin/categorias/:id
**/
router.delete("/categorias/:id", categoriaController.deletarCategoria);

/* *** USERS *** */

/**
@route GET usuários
@desc Retornar todos os usuários
@access Private 
@endpoint http://localhost:porta/api/admin/users
**/
router.get("/users", userController.getAll);

/**
@route GET usuário por ID
@desc Retornar um único usuário por ID
@access Private 
@endpoint http://localhost:porta/api/admin/users/:id
**/
router.get("/users/:id", userController.getById);

module.exports = router;
