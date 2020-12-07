const controller = require ("../controllers/prosControllers")

const express = require ("express") 
const router = express.Router() 

router.get("/all", controllers.getAll)
router.get("/city", controllers.getByCity)
router.get("/state", controllers.getByState)

router.post('/pros', controllers.createProfessional)

router.put('/pros/:id', controllers.updateProfessional)

router.patch('/pros/:id', controllers.updateField)

router.delete('/pros/:id', controllers.deleteProfessional)

module.exports = router 

