const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message");

// @route POST /messages/new
// @desc Criar uma mensagem
router.post("/new", messageController.addMessage);

// @rout GET /messages/all
router.get("/all", messageController.getAll);

// @rout GET /messages/driver/:id
router.get("/driver/:id", messageController.getAllByDriver);

// @rout GET /messages/ambulance/:id
router.get("/ambulance/:id", messageController.getAllAmbulance);
