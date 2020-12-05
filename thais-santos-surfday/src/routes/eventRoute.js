const express = require('express')
const router = express.Router()

const eventController = require('../controllers/eventController')

router.get('/', eventController.getAll)

router.post('/create', eventController.createEvent)

router.put('/editar/:id', eventController.updateEvent)

router.patch('/open/:id', eventController.closeApllies)

router.delete('/:id', eventController.deleteEvent )

module.exports = router


