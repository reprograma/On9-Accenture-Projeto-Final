const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");

router.get("/", mentorController.getAll);

// router.get("/MentoringType", mentorController.getByMentoringType);

router.post("/register", mentorController.createMentor);

router.put("/edit/:id", mentorController.updateMentor);

router.patch("/update/:id", mentorController.updateMentorAvailable);

router.delete("/:id", mentorController.deleteMentor);

module.exports = router;