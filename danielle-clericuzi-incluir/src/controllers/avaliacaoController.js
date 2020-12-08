const { req, res } = require('express');
const mongoose = require('mongoose');
const Avaliacao = require('../models/avaliacaoModels');
const Estabelecimento = require('../models/estabelecimentoModels');
const User = require('../models/userModels');
const { avaliacaoSchema } = require('../validators/avaliacaoValidator')

const obterAvaliacaoPorEstabelecimento = async(req, res) => {
    const { estabelecimentoID } = req.params;
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



module.exports = {
    obterAvaliacaoPorEstabelecimento,
    realizarCadastroAvaliacao,
    deletarAvaliacao,
    }