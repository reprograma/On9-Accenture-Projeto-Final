const express = require("express");
const router = express.Router();
const controller = require("../controllers/mentorController");

router.get("/", controller.getAll);

router.post("/registerMentor", controller.createMentor);

//@ http://localhost:3000/mentor/edit/:id
router.put("/edit/:id", controller.updateMentor);

//@ http://localhost:3000/mentor/updateAvailable/:id
router.patch("/updateAvailable/:id", controller.updateMentorAvailable);

//@ http://localhost:3000/mentor/id
router.delete("/:id", controller.deleteMentor);

module.exports = router;