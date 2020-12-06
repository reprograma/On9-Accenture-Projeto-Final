const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");

router.get("/all", videoController.getAll);
router.get("/:id", videoController.getById);
router.get("/categoria/:id", videoController.getByCategoria);

router.post("/new", videoController.criarVideo);

module.exports = router;
