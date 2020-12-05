const express = require("express");
const router = express.Router();
const controller = require("../controllers/opportunityController");

router.get("/", controller.getAll);

router.post("/registerOpportunity", controller.createOpportunity);

//@ http://localhost:3000/mentor/edit/:id
router.put("/editOpportunity/:id", controller.updateOpportunity);

//@ http://localhost:3000/mentor/updateAvailable/:id
router.patch("/updateFree/:id", controller.updateOpportunityFree);

//@ http://localhost:3000/mentor/id
router.delete("/:id", controller.deleteOpportunity);

module.exports = router;