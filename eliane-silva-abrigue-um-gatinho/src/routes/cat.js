const express = require('express')
const router = express.Router()
//const catController = require('../controllers/cat')
const homeController = require('../controllers/home')

//@route POST api/cat/newcat
//@desc Registrar um gato
//@acess Public
//router.post('/newcat', catController.createNewCat)

//@route GET api/cat/allhomes
//@desc Visualizar todos lares temporários disponíveis
//@acess Public
router.get('/allhomes', homeController.getAll)

//@route GET api/cat/bycity
//@desc Visualizar lares temporários por cidade
//@acess Public
router.get('/bycity', homeController.getByCity) 

//@route GET api/cat/bydistrict
//@desc Visualizar lares temporários por bairro
//@acess Public
router.get('/bydistrict', homeController.getByNeighborhood)

//@route PUT api/cat/update/:id
//@desc Atualizar cadastro do gato
//@acess Public
//router.put('/update/:id', catController.updateall)

//@route PATCH api/cat/updateavaiable/:id
//@desc Atualizar a disponibilidade do gato
//@acess Public
//router.patch('/updateavaiable/:id', catController.updateavaiable);

//@route DELETE api/cat/delete/:id
//@desc Deletar cadastro do gato
//@acess Public
//router.delete('/delete/:id', catController.delete);

module.exports = router

