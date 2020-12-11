const { request, response } = require("express")
const mongoose = require("mongoose");
const Vendedor = require("../models/Vendedores")
const bcrypt = require("bcrypt");
const bcryptSalt = 6;

//GET
const vendedores = (request, response) => {

    Vendedor.find()
        .then((vendedores) => {
            response.status(200).json(vendedores);
        })
        .catch(err => next(err));
}

//GET
const nomeVendedor = (request, response) => {

    const {nome} = request.params;

    Vendedor.find({nome: nome})
        .then((nome) => {
            response.status(200).json(nome);
        })
        .catch(err => next(err));
}

//POST
const novoVendedor = async (req, res, next) => { 
    const { nome, password, rg } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);

    try {
      const hashPass = await bcrypt.hashSync(password, salt);
  
      const novoVendedor = new Vendedor({
        nome,
        rg,
        hashPass
      });
      
      Vendedor.findOne({nome:nome})
        .then((vendedor =>{
            if (vendedor ) {
                res.status(401).json("Vendedor(a) já cadastrado(a)")
               
            }else{
                novoVendedor.save()
                .then((vendedor) => {
                    res.status(201).json(vendedor);
                })
                .catch(err => next(err));
            }
            console.log(vendedor)
        }))
     
    } catch (e) {
      return res.status(401).json({ error: 'erro' });
    }
  }

//DELETE
const desligamento = (request, response) => {
    const { id } = request.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({message: "Specified id is not valid"});
        return;
    }
       
    Vendedor.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Vendedor(a) desligado(a)");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
        

module.exports = {
    vendedores,
    nomeVendedor,
    novoVendedor,
    desligamento
            }