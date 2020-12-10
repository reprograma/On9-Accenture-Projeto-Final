const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const catController = require('../controllers/cat')
const middleware = require('../middlewares/auth')

//@route POST api/home/new
//@desc Registrar novo usuário que ofereça um lar temporário
//@acess Public
router.post('/new', homeController.createNewHome)

//@route Middleware
//@desc Utiliza o token gerado para o usuário para que tenha acesso a outras rotas
//@acess Private
router.use(middleware)

//@route GET api/home/all
//@desc Visualizar todos os gatos cadastrados
//@acess Public
router.get('/all', catController.getAll)

//@route GET api/home/by-city
//@desc Visualizar gatos cadastrados por cidade
//@acess Public
router.get('/by-city', catController.getByCity)

//@route GET api/home/by-district
//@desc Visualizar gatos cadastrados por bairro
//@acess Public
router.get('/by-district', catController.getByNeighborhood)

//@route GET api/home/favorite/:id
//@desc Visualizar gatos favoritados utilizando ID do usuário
//@acess Public
router.get('/favorites/:id', homeController.getFavCats)

//@route PUT api/home/update/:id
//@desc Atualizar todo cadastro do Lar Temporário
//@acess Public
router.put('/update/:id', homeController.updateAll)

//@route PATCH api/home/available/:id
//@desc Atualizar a disponibilidade do lar temporário
//@acess Public
router.patch('/available/:id', homeController.updateAvailable)

//@route PATCH api/home/favorite/:id
//@desc Acrescentar ID's de gatos favoritos através do ID do lar temporário
//@acess Public
router.patch('/favorite/:id', homeController.updateFavCats)

//@route DELETE api/home/delete/:id
//@desc Deletar cadastro do Lar Temporário
//@acess Public
router.delete('/delete/:id', homeController.deleteHome)

module.exports = router
