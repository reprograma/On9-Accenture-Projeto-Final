const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const videoController = require("../controllers/video");

/**
@route PUT usuário
@desc Atualizar um usuário
@access Private 
@endpoint http://localhost:porta/api/perfil/editar/:id
**/
router.put("/editar/:id", userController.atualizarUser);

/**
@route DELETE usuários
@desc Deletar um usuário pelo seu id
@access Private 
@endpoint http://localhost:porta/api/perfil/:id
**/
router.delete("/:id", userController.deletarUser);

/**
@route POST favorite vídeo
@desc Favoritar um vídeo
@access Private 
@endpoint http://localhost:porta/api/perfil/:userid/favorite/:videoId/like
**/
router.post("/:userid/favorite/:videoid/like", userController.favoriteLike);

/**
@route POST desfavorite vídeo
@desc Favoritar um vídeo
@access Private 
@endpoint http://localhost:porta/api/perfil/:userid/favorite/:videoId/dislike
**/
router.post(
  "/:userid/favorite/:videoid/dislike",
  userController.favoriteDislike
);

/**
@route GET vídeos favoritos
@desc Obtém os videos favoritos
@access Private 
@endpoint http://localhost:porta/api/perfil/:id/videos/favorite
**/
router.get("/:id/videos/favorite", videoController.getAllFavorite);

module.exports = router;
