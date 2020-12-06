const express = require('express');
const router = express.Router();
const healthClinicController = require('../controllers/healthClinicController.js')


router.get('/', healthClinicController.getAll);

router.get('/bairro', healthClinicController.getByBorough);

router.get('/vacina', healthClinicController.getByVaccine);

router.get('/vacina-e-bairro', healthClinicController.getByVacAndBorough);

router.post('/cadastrar', healthClinicController.registerHealthClinic);

router.put('/atualizar/:id', healthClinicController.updateHealthClinic);

router.patch('/atualizar-endereco/:id', healthClinicController.updateAddress);

router.patch('/atualizar-vacinas/:id', healthClinicController.updateVaccinesList);

router.delete('/deletar/:id', healthClinicController.deleteHealthClinic);

module.exports = router;
