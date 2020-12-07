const express = require("express");
const router = express.Router();
const controller = require("../controllers/mentoredController");

router.get("/", controller.getAll);

router.post("/registerMentored", controller.createMentored);

//@ http://localhost:3000/mentor/edit/:id
router.put("/editMentored/:id", controller.updateMentored);

//@ http://localhost:3000/mentor/updateAvailable/:id
router.patch("/updateConcluded/:id", controller.updateMentoredConcluded);

//@ http://localhost:3000/mentor/id
router.delete("/:id", controller.deleteMentored);

module.exports = router;