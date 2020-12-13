const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");

/**
@route GET vídeos
@desc Retornar todos os vídeos
@access Public 
@endpoint http://localhost:porta/api/videos
**/
router.get("/", videoController.getAll);

/**
@route GET videos/:id
@desc Retornar apenas um único vídeo pelo seu id: 
@access Public 
@endpoint http://localhost:porta/api/videos/:id
**/
router.get("/:id", videoController.getById);

/**
@route GET videos/categoria
@desc Retornar todos os vídeos por categoria 
@access Public 
@endpoint http://localhost:porta/api/videos/categoria/:id
**/
router.get("/categoria/:id", videoController.getByCategoria);

module.exports = router;
