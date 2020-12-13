const express = require('express');
const router = express.Router();
const controller = require("../controllers/usersControllers");
const authMiddleware = require('../middlewares/auth')

router.get("/all", controller.getAll);

router.get("/city", controller.getByCity);

router.get("/type", controller.getByGameType);

router.post("/register", controller.signup);

router.post('/favorite/:id', controller.favoriteUser)

router.get("/:id", controller.getById)


// ----------------- rotas autorizadas --------------------

router.use(authMiddleware);

router.patch("/updateType/:id", controller.updateType);

router.patch("/updateDesc/:id", controller.updateDescription);

router.patch("/updateCity/:id", controller.updateCity);

router.delete("/delete/:id", controller.deleteUser);

router.get("/favorite/:id", controller.getFavoriteUser)

module.exports = router;

