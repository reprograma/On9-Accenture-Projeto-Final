const { request, response } = require("express")
const mongoose = require("mongoose");
const Vendas = require("../models/Vendas");
const Estoque = require("../models/Estoque");
const Vendedor = require("../models/Vendedores")
const {vendaSchema} = require("../validators/vendas")
const {DateSchema} = require("yup")
//const {vendaSchema} = require("../validators/vendaSchema")

//GET 
const vendas = (request, response) => {

    Vendas.find()
        .then((Vendas) => {
            response.status(200).json(Vendas);
        })
        .catch(err => next(err));
}

//POST
const vendaProduto = async (request, response) => {

    const vendaValidada = await vendaSchema.validate(request.body)
    console.log(vendaValidada)
    const nomeProduto = vendaValidada.nomeProduto
    const vendedor = vendaValidada.vendedor

    

    Vendedor.findOne({nome: vendedor})
    .then(async vendedor =>{
        if(vendedor.nome){
            console.log(vendedor.nome)
            console.log("vendedor cadastrado")

            try {
                let produto = await Estoque.findOne({nomeProduto: nomeProduto});
                 
                    
                produto.estoque = produto.estoque - vendaValidada.quantidade
        
                if (produto.estoque < 0) {
                    return response.status(400).json("Quantidade insuficiente! Favor abastecer");
                } else {
        
                    let novoPedido = new Vendas(vendaValidada)
                        novoPedido.save()
                        produto.save();
        
                    return response.status(201).json("Estoque atualizado!, restam " + produto.estoque + " unidades")
                }
            }
            catch (err) {
        
                return response.status(400).json({ error: err.message })
            }
        
        }else{
            console.log("vendedor não encontrado")
        }
    })
        .catch((err) => {
            throw new Error(err);
        });
    }


//DELETE
const estorno =  (request, response) => {
    const { id } = request.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json
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

        })

}


module.exports = {
    vendas,
    vendaProduto,
    estorno
}