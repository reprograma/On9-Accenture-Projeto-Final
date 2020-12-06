const express = require('express');
const router = express.Router();
const vaccineController = require('../controllers/vaccineController.js')


router.get('/', vaccineController.getAll);

router.get('/lote', vaccineController.getByBatch);

router.get('/vacina', vaccineController.getByVaccine);

router.post('/cadastrar', vaccineController.registerVaccine);

router.put('/atualizar/:id', vaccineController.updateVaccine);

router.patch('/atualizar-lote/:id', vaccineController.updateBatch);

router.patch('/atualizar-doses/:id', vaccineController.updateDoses);

router.delete('/deletar/:id', vaccineController.deleteVaccine);

module.exports = router;
