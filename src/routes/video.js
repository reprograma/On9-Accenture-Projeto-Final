const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");

/**
@route GET vídeos
@desc Retornar todos os vídeos
@access Public 
@endpoint http://localhost:porta/videos/all
**/
router.get("/all", videoController.getAll);

/**
@route GET videos/:id
@desc Retornar apenas um único vídeo pelo seu id: 
@access Public 
@endpoint http://localhost:porta/videos/:id
**/
router.get("/:id", videoController.getById);

/**
@route GET videos/categoria
@desc Retornar todos os vídeos de uma categoria por id 
@access Public 
@endpoint http://localhost:porta/videos/categoria/:id
**/
router.get("/categoria/:id", videoController.getByCategoria);

/**
@route POST vídeos
@desc Criar um novo vídeo
@access Public 
@endpoint http://localhost:porta/videos/new
**/
router.post("/new", videoController.criarVideo);

/**
@route PUT vídeos
@desc Atualizar um vídeo
@access Public 
@endpoint http://localhost:porta/videos/editar/:id
**/
router.put("/editar/:id", videoController.atualizarVideo);

/**
@route DELETE vídeos
@desc Deletar um vídeo pelo seu id
@access Public 
@endpoint http://localhost:porta/videos/:id
**/
router.delete("/:id", videoController.deletarVideo);

module.exports = router;
