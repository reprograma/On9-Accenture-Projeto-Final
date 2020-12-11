const express = require('express')
const router = express.Router()
const controller = require("../controllers/usersControllers")
const authMiddleware = require("../middlewares/auth")

router.get("/all", controller.getAll);

//router.get("/:type", controller.getByGameType);

router.post("/register", controller.post);
router.use(authMiddleware)
/*
router.put("/update/:id"), controller.updateUsers

router.delete("/delete/:id", controller.deleteUsers)
*/
//router.get("/:city", controller.getByCity);

module.exports = router;

