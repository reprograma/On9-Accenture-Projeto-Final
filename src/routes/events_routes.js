
const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events_controllers');

router.get("/", eventsController.getAll);
router.get("/:id", eventsController.getById);
router.post("/", eventsController.registerEvent);
router.put("/:id", eventsController.updateEvent);
router.delete("/:id", eventsController.deleteEvent);
module.exports = router;