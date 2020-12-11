const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");

router.post("/register", mentorController.createMentor);

router.get("/", mentorController.getAll);

router.get("/visitedCountry", mentorController.getByVisitedCountry);

router.get("/available", mentorController.getByAvailable);

router.get("/mentoringType", mentorController.getByMentoringType);

router.put("/edit/:id", mentorController.updateMentor);

router.patch("/update/:id", mentorController.updateMentorAvailable);

router.delete("/:id", mentorController.deleteMentor);

module.exports = router;