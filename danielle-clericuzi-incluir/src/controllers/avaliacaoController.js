const { req, res } = require('express');
const mongoose = require('mongoose');
const Avaliacao = require('../models/avaliacaoModels');
const { avaliacaoSchema } = require('../validators/avaliacaoValidator')

const obterAvaliacaoPorEstabelecimento = async(req, res) => {
    let { estabelecimentoId } = req.query;
    Avaliacao.find({ estabelecimentoId: estabelecimentoId })
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
    const { userId, estabelecimentoId, vagaPCD, banheiro, notaBanheiro, sinalizacao, notaSinalizacao, tradutorLibras, rampa, locomocaoInterna, avaliacaoGeral } = req.body
    
    try {
    const validacaoAvaliacao = await avaliacaoSchema.validate(req.body);
    const novaAvaliacao = new Avaliacao(validacaoAvaliacao);
    
    Avaliacao.find({ userId: validacaoAvaliacao.userId, estabelecimentoId: validacaoAvaliacao.estabelecimentoId  })
    .then(async existeAvaliacao => {
        console.log(existeAvaliacao.length)
        if (existeAvaliacao !== null && existeAvaliacao.length > 0) {
            return res.status(400).json({
                errors: ['Já foi realizada avaliação para esse estabelecimento']
            })
        }

    novaAvaliacao.save()
        .then((avaliacao) => {
            res.status(201).json(avaliacao);
        })
        .catch(err => next(err));
    }) 
} catch (e) {
    return res.status(400).json(e)
}
}

const deletarAvaliacao = async(req, res) =>{
    const { id } = req.params
     Avaliacao.findByIdAndDelete(id)
         .then(() => {
             res.status(200).json('Avaliação removida');
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
