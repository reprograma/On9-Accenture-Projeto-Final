const express = require('express')
const router = express.Router()

const eventController = require('../controllers/eventController')

router.get('/', eventController.getAll)

router.get('/open', eventController.getByApply)

router.post('/create', eventController.createEvent)

router.put('/edit/:id', eventController.updateEvent)

router.patch('/open/:id', eventController.closeApllies)

router.delete('/:id', eventController.deleteEvent )

module.exports = router


