const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat')
const homeController = require('../controllers/home')
const authMiddleware = require('../middleware/authCat')

//@route POST api/cat/new-cat
//@desc Registrar um gato
//@acess Public
router.post('/new-cat', catController.createNewCat)

//@route Middleware
//@desc Utiliza o token gerado para o usuário que cadastrou um gato para que tenha acesso a outras rotas
//@acess Private
router.use(authMiddleware)

//@route GET api/cat/all-homes
//@desc Visualizar todos lares temporários disponíveis
//@acess Public
router.get('/all-homes', homeController.getAll)

//@route GET api/cat/by-city
//@desc Visualizar lares temporários por cidade
//@acess Public
router.get('/by-city', homeController.getByCity)

//@route GET api/cat/by-district
//@desc Visualizar lares temporários por bairro
//@acess Public
router.get('/by-district', homeController.getByNeighborhood)

//@route PUT api/cat/update-registration/:id
//@desc Atualizar cadastro do gato
//@acess Public
router.put('/update-registration/:id', catController.updateRegistration)

//@route PATCH api/cat/update-available/:id
//@desc Atualizar a disponibilidade do gato
//@acess Public
router.patch('/update-available/:id', catController.updateAvailable);

//@route DELETE api/cat/delete/:id
//@desc Deletar cadastro do gato
//@acess Public
router.delete('/delete/:id', catController.deleteRegistration);

module.exports = router

