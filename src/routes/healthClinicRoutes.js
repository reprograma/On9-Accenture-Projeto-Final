const express = require('express');
const router = express.Router();
const healthClinicController = require('../controllers/healthClinicController.js')
const authMiddlewares = require('../middlewares/auth.js')


router.get('/', healthClinicController.getAll);

router.get('/borough', healthClinicController.getByBorough);

router.get('/vaccine', healthClinicController.getByVaccine);

router.get('/vaccine-dose', healthClinicController.getByVaccineDose);

router.use(authMiddlewares)

router.post('/register', healthClinicController.registerHealthClinic);

router.put('/update/:id', healthClinicController.updateHealthClinic);

router.patch('/update-address/:id', healthClinicController.updateAddress);

router.patch('/update-vaccines/:id', healthClinicController.updateVaccinesList);

router.delete('/delete/:id', healthClinicController.deleteHealthClinic);

module.exports = router;
