const express = require("express")
const router = express.Router()
const rightsController = require("../controller/rightsController")

//@route GET
//retornar todos os direitos registrados
//@endpoint http://localhost:8080/rights
//@access Publico
router.get('/rights', rightsController.getAll);


//@route POST
//@desc Realizar o cadastro de um direito
//@access Privado 
//@endpoint http://localhost:8080/rights/add
router.post('/rights/add', rightsController.addRight);


/* @route PUT rights
 @desc Atualizar os dados do direito
 @access Privado
 @endpoint http://localhost:8080/rights/:id */
 router.put('/rights/:id', rightsController.updateRight);

/*  @route DELETE rights
 @desc Deletar o registro do direito
 @access Privado
 @endpoint http://localhost:8080/rights/:id */
 router.delete('/rights/:id', rightsController.deleteRight);

module.exports = router
