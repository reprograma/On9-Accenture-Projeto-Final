const express = require("express");
const router = express.Router();
const oportunityController = require("../controllers/opportunityController");

router.get("/", oportunityController.getAll);

router.post("/register", oportunityController.createOpportunity);

router.put("/edit/:id", oportunityController.updateOpportunity);

router.delete("/:id", oportunityController.deleteOpportunity);

module.exports = router;