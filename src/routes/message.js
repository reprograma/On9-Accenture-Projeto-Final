const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message");
//const messageAmbulance = require("../controllers/ambulance");
//const messageAgent = require("../controllers/transitAgent");

// @route POST /messages/new
// @desc Criar uma mensagem
router.post("/create", messageController.postNewMessage);

// @route POST /messages/new
// @desc Criar uma mensagem
//router.post("/new", messageAgent.addMessage);


// @rout GET /messages/
router.get("/", messageController.get)

// @rout GET /messages/:id
router.get("/:id", messageController.getById);

// @rout GET /messages/ambulance/:id
//router.get("/ambulance/:id", messageController.getAllAmbulance);

module.exports = router