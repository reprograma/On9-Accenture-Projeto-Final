const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message");
const messageAmbulance = require("../controllers/ambulance");
const messageAgent = require("../controllers/transitAgent");

// @route POST /messages/new
// @desc Criar uma mensagem
router.post("/create", messageController.postNewMessage);

// @route POST /messages/new
// @desc Criar uma mensagem
//router.post("/new", messageAgent.addMessage);


// @rout GET /messages/all
//router.get("/all", messageAmbulance.getAll);

// @rout GET /messages/driver/:id
//router.get("/driver/:id", messageAgent.getAllByDriver);

// @rout GET /messages/ambulance/:id
//router.get("/ambulance/:id", messageAmbulance.getAllAmbulance);

module.exports = router