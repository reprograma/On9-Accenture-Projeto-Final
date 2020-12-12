const { request, response } = require("express")
const mongoose = require("mongoose");
const Vendas = require("../models/Vendas");
const Estoque = require("../models/Estoque");
const Vendedor = require("../models/Vendedores")
const {vendaSchema} = require("../validators/vendas")

//const {vendaSchema} = require("../validators/vendaSchema")

//GET 
const vendas = (request, response) => {

    Vendas.find()
        .then((Vendas) => {
            response.status(200).json(Vendas);
        })
        .catch((err) => {
            response.status(400).json(err)
        });
}

//GET
const nomeVendedor = (request, response, next) => {

    const {nome} = request.params;
 
    console.log(nome)
    Vendas.find({vendedor: nome})

        .then((vendedor) => {
          
            response.status(200).json(vendedor);
        })
        .catch((err) => {
            response.status(400).json(err)
        });
}

//POST
const vendaProduto = async (request, response) => {

    const vendaValidada = await vendaSchema.validate(request.body)
    const nomeProduto = vendaValidada.nomeProduto
    const vendedor = vendaValidada.vendedor

            try {
                let produto = await Estoque.findOne({nomeProduto: nomeProduto});
                let buscaVendedor = await Vendedor.findOne({nome: vendedor})

                if (buscaVendedor !== null){
                    
                    produto.estoque = produto.estoque - vendaValidada.quantidade
        
                    if (produto.estoque < 0) {
                        return response.status(400).json("Quantidade insuficiente! Favor abastecer");
                    } else {
            
                        let novoPedido = new Vendas(vendaValidada)
                            novoPedido.save()
                            produto.save();
            
                        return response.status(201).json("Estoque atualizado!, restam " + produto.estoque + " unidades")
                    }

                }else (buscaVendedor == null); {
                    return response.status(400).json("Vendedor(a) não cadastrado(a), não é possível realizar venda")} 
                
            }
            catch (err) {
        
                return response.status(400).json({ error: err.message })
            }
        
        }
   
    
//DELETE
const estorno =  (request, response) => {
    const { id } = request.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({message: "Specified id is not valid"});
        
    }
    

console.log(id)

    Vendas.findById(id)
        .then((venda) => {

            let quantidadeVenda = venda.quantidade
            let produtoNome = venda.nomeProduto

            Estoque.findOne({ nomeProduto: produtoNome })
                .then(async produto => {
 
                    produto.estoque = produto.estoque + quantidadeVenda
                    await produto.save()

                     Vendas.findByIdAndDelete(id)
                        .then(() => {
                            response.status(200).json("Estorno feito com sucesso e estoque atualizado ")
                        })
                        .catch((err) => {
                            throw new Error(err);
                        });
                })
                .catch((err) => {
                    throw new Error(err);
                });


        })
        .catch((err) => {
            throw new Error(err);
        });

}


module.exports = {
    vendas,
    vendaProduto,
    estorno,
    nomeVendedor
}