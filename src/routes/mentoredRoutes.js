const express = require("express");
const router = express.Router();
const controller = require("../controllers/mentoredController");

router.get("/", controller.getAll);

router.post("/registerMentored", controller.createMentored);

router.put("/editMentored/:id", controller.updateMentored);

router.patch("/updateConcluded/:id", controller.updateMentoredConcluded);

router.delete("/:id", controller.deleteMentored);

module.exports = router;