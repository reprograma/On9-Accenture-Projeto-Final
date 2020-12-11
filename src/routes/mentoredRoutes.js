const express = require("express");
const router = express.Router();
const controller = require("../controllers/mentoredController");

router.get("/", controller.getAll);

router.get("/destinyCountry", controller.getByDestinyCountry);

router.get("/concluded", controller.getByConcluded);

router.post("/register", controller.createMentored);

router.put("/edit/:id", controller.editMentored);

router.patch("/update/:id", controller.updateMentoredConcluded);

router.delete("/:id", controller.deleteMentored);

module.exports = router;