const { req, res } = require('express');
const mongoose = require('mongoose');
const Avaliacao = require('../models/avaliacaoModels');
//const Estabelecimento = require('../models/estabelecimentoModels');
//const User = require('../models/userModels');
const { avaliacaoSchema } = require('../validators/avaliacaoValidator')

const obterAvaliacaoPorEstabelecimento = async(req, res) => {
    let { estabelecimentoID } = req.params;
    Avaliacao.find({ estabelecimentoID: estabelecimentoID })
        .then((avaliacoes) => {
            if (avaliacoes == 0) {
                res.status(404).json({ message: 'Não há avaliações para este estabelecimento' });
            }
            res.status(200).json(avaliacoes);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
}

const realizarCadastroAvaliacao = async(req, res) => {
    let { userId, estabelecimentoId, vagaPCD, banheiro, notaBanheiro, sinalizacao, notaSinalizacao, tradutorLibras, rampa, locomocaoInterna, avaliacaoGeral, dataInclusao } = req.body
    const validacaoAvaliacao = await avaliacaoSchema.validate(req.body);
    
    const novaAvaliacao = new Avaliacao(validacaoAvaliacao);
    novaAvaliacao.find({ userId: validacaoAvaliacao.userId, estabelecimentoId: validacaoAvaliacao.estabelecimentoId  })
    .then(async existeAvaliacao => {
        if (existeAvaliacao !== null) {
            return res.status(400).json({
                errors: ['Já foi realizada avaliação para esse estabelecimento']
            })
        }

    novaAvaliacao.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));
    }) 
}

const deletarAvaliacao = async(req, res) =>{
    const { id } = request.params
     Avaliacao.findByIdAndDelete(id)
         .then(() => {
             response.status(200).json('Avaliação removida');
         })
         .catch((err) => {
             throw new Error(err);
         });
 }

    
module.exports = {
    obterAvaliacaoPorEstabelecimento,
    realizarCadastroAvaliacao,
    deletarAvaliacao
    }
