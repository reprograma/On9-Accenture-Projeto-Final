const express = require('express');
const router = express.Router();
const controller = require("../controllers/usersControllers");
const authMiddleware = require('../middlewares/auth')

router.get("/all", controller.getAll);

router.get("/city", controller.getByCity);

router.get("/type", controller.getByGameType);

router.post("/register", controller.signup);

// ----------------- rotas autorizadas --------------------

router.use(authMiddleware);
router.patch("/updateType/:id", controller.updateType);

router.patch("/updateDesc/:id", controller.updateDescription);

router.delete("/delete/:id", controller.deleteUser);


module.exports = router;

