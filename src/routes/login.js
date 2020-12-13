const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");

/**
@route POST login user
@desc Fazer login
@access Public 
@endpoint http://localhost:porta/api/login
**/
router.post("/", loginController.accessToken);

module.exports = router;
