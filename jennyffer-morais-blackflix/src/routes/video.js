const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");


router.get("/all", videoController.getAll);
router.get("/:id", videoController.getById);


module.exports = router;
