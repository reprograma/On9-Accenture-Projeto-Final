const { req, res } = require('express');
const mongoose = require('mongoose');
const Estabelecimento = require('../models/estabelecimentoModels');
const { estabelecimentoSchema } = require('../validators/estabelecimentoValidator')

const obterEstabelecimento = async(req, res) => {
    Estabelecimento.find()
        .then((estabelecimentos) => {
            if (estabelecimentos == 0) {
                res.status(404).json({ message: 'Não há estabelecimentos cadastrado' });
            }
            res.status(200).json(estabelecimentos);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
}

const obterEstabelecimentoPorCidade = async(req, res) => {
    const { cidade } = req.params;
    Estabelecimento.find({ cidade: cidade })
        .then((estabelecimentos) => {
            if (estabelecimentos == 0) {
                res.status(404).json({ message: 'Não há estabelecimento cadastrado' });
            }
            res.status(200).json(estabelecimentos);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
}

const obterEstabelecimentoPorTipo = async(req, res) => {
    const { tipo } = req.params;
    Estabelecimento.find({ tipo: tipo })
        .then(async estabelecimentos => {
            if (estabelecimentos == 0) {
                res.status(404).json({ message: 'Não há estabelecimento cadastrado' });
            } else {
                res.status(200).json(estabelecimentos);
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });

}

const obterEstabelecimentoPorNome = async(req, res) => {
    const { nome } = req.params;
    Estabelecimento.find({ nome: nome })
        .then(async estabelecimentos => {
            if (estabelecimentos == 0) {
                res.status(404).json({ message: 'Não há estabelecimento cadastrado' });
            } else {
                res.status(200).json(estabelecimentos);
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });

}

const cadastrarEstabelecimento = async(req, res, next) => {
    const { nome, endereco, cidade, tipo, dataInclusao } = req.body;
    try {
        const novoEstabelecimento = await Estabelecimento.create({
            nome,
            endereco,
            cidade,
            tipo,
            dataInclusao

        });

        await novoEstabelecimento.save()
            .then((estabelecimento) => {
                res.status(201).json(estabelecimento);
            })
            .catch(err => next(err));

    } catch (e) {
        return res.status(400).json(e)
    }
}

const atualizarCadastroEstabelecimento = async(req, res) =>{
    const { id } = req.params 
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: 'O estabelecimento não existe' });
        return;
    }
    
    Estabelecimento.findByIdAndUpdate(id, req.body)
        .then(() => {
            response.status(200).json({ message: ` ${request.params.id} atualizado com sucesso.` });
        })
        .catch((err) => {
            response.json(err);
        });

const deletarEstabelecimento = async(req, res) =>{
    const { id } = request.params
    
    Estabelecimento.findByIdAndDelete(id)
        .then(() => {
            response.status(200).json('Estabelecimento removido da base');
        })
        .catch((err) => {
            throw new Error(err);
        });
}

module.exports = {
    obterEstabelecimento,
    obterEstabelecimentoPorCidade,
    obterEstabelecimentoPorTipo,
    obterEstabelecimentoPorNome,
    cadastrarEstabelecimento,
    atualizarCadastroEstabelecimento,
    deletarEstabelecimento
}
}