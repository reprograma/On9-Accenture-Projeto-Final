const controller = require("../controllers/hotelController")
const express = require("express")
const router = express.Router()

router.get("/todoshoteis", controller.getByState)
router.get("/:cidade", controller.getByCity) //quando era Id passado pelo postman, na rota ficava /:id, com cidade é o mesmo?

module.exports = router