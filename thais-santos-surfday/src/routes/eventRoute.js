const express = require('express')
const router = express.Router()

const eventController = require('../controllers/eventController')

//@router GET /events
//@desc Busca todos eventos
//@access publico
router.get('/', eventController.getAll)

//@router GET /events/open
//@desc Busca todos eventos abertos para inscrição
//@access publico
router.get('/open', eventController.getByApply)

//@router POST /events/create
//@desc Cria um novo eventos
//@access publico
router.post('/create', eventController.createEvent)

//@router PUT /events/:id
//@desc Altera localização do evento
//@access publico
router.put('/edit/:id', eventController.updateEvent)

//@router PATCH /events/open/:id
//@desc Encerra as inscrições de um evento
//@access publico
router.patch('/open/:id', eventController.closeApllies)

//@router DELETE /events/:id
//@desc Deleta um evento
//@access publico
router.delete('/:id', eventController.deleteEvent )

module.exports = router


