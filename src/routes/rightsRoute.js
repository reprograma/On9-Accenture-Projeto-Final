const express = require("express")
const router = express.Router()
const rightsController = require("../controllers/rightsController")
const authMiddlewares = require('../middlewares/auth')

//@route GET
//retornar todos os direitos registrados
//@endpoint http://localhost:8080/rights
//@access Publico
router.get('/', rightsController.getAll);

router.use(authMiddlewares)

//@route POST
//@desc Realizar o cadastro de um direito
//@access Privado 
//@endpoint http://localhost:8080/rights/add
router.post('/add', rightsController.addRight);


/* @route PUT rights
 @desc Atualizar os dados do direito
 @access Privado
 @endpoint http://localhost:8080/rights/:id */
 router.put('/update/:id', rightsController.updateRight);

/*  @route DELETE rights
 @desc Deletar o registro do direito
 @access Privado
 @endpoint http://localhost:8080/rights/:id */
 router.delete('/delete/:id', rightsController.deleteRight);

module.exports = router
