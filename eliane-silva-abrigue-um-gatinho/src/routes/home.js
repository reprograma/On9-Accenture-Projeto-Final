const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
//const catController = require('../controllers/cat')

//@route POST api/home/new
//@desc Registrar novo usuário que ofereça um lar temporário
//@acess Public
router.post('/new', homeController.createNewHome)

//@route GET api/home/all
//@desc Visualizar todos os gatos cadastrados
//@acess Public
//router.get('/all', catController.getAll)

//@route GET api/home/bycity
//@desc Visualizar gatos cadastrados por cidade
//@acess Public
//router.get('/bycity', catController.getByCity)

//@route GET api/home/bydistrict
//@desc Visualizar gatos cadastrados por bairro
//@acess Public
//router.get('/bydistrict', catController.getByNeighborhood)

//@route PUT api/home/update/:id
//@desc Atualizar todo cadastro do Lar Temporário
//@acess Public
router.put('/update/:id', homeController.updateAll)

//@route PATCH api/home/available/:id
//@desc Atualizar a disponibilidade do lar temporário
//@acess Public
router.patch('/available/:id', homeController.updateAvailable)

//@route DELETE api/home/delete/:id
//@desc Deletar cadastro do Lar Temporário
//@acess Public
router.delete('/delete/:id', homeController.deleteHome)

module.exports = router
