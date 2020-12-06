const express = require("express");
const router = express.Router();
const controller = require("../controllers/transitAgent");
const authMiddleware = require("../middlewares/auth");

//@route POST 
