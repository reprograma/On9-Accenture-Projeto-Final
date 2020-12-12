const express = require('express')
const router = express.Router()

const eventController = require('../controllers/eventController')
const authMiddleware = require('../middlewares/auth')

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
//@access privado
router.post('/create', eventController.createEvent)

//@router PUT /events/:id
//@desc Altera localização do evento
//@access privado
router.put('/edit/:id', eventController.updateEvent)

//@router PATCH /events/open/:id
//@desc Encerra as inscrições de um evento
//@access privado
router.patch('/open/:id', eventController.closeApllies)



//@router DELETE /events/:id
//@desc Deleta um evento
//@access privado
router.delete('/:id', eventController.deleteEvent )

router.use(authMiddleware)

module.exports = router


