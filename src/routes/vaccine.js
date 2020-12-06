const express = require('express')
const router = express.Router()
const vaccineController = require('../controllers/vaccine')
const authMiddleware = require('../middlewares/auth')

router.get('/', vaccineController.getVaccine)

router.get('/:id', vaccineController.getVaccineById)

router.post('/register', vaccineController.registerVaccine)

// router.post('/register/:id', vaccineController.insertVaccineCard)

router.patch('/register/:id', vaccineController.insertVaccineCard)

router.use(authMiddleware)
router.delete('/:id', vaccineController.deleteVaccine)

module.exports = router