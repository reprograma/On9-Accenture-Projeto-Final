const {req, res} = require('express');
const Restaurante = require('../models/restaurantes');
const Usuario = require('../models/usuarios');
const senhahash = require('../helpers/usuario')

const todosRestaurantes = (req, res)=>{
    Restaurante.find()
    .then((restaurantes)=>{
    if(Restaurante.length < 0){
        res.status(204).json({message: 'não existem restaurantes cadastrados'})
    }else{
        res.status(200).json(restaurantes)
    }
    })
    .catch((err)=>{
        res.status(500).json(err)
      })
}

const restaurantePorId = (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message: 'o id especificado não é valido'})
    }
    Restaurante.findById(id)
        .then((restaurante)=>{
            res.status(200).json(restaurante);
        })
        .catch((err)=>{
            res.json(err);
        })
} 

function checaSenha(senhahash, senha) {
    return bcrypt.compareSync(senhahash, senha)
}

const cadastroRestaurante = async (req, res, next)=>{
    const { nome, senha, restaurante, especialidades, rua } = request.body
    try {
    checkPassword(senhahash, senha);

        try{
            const restaurante= new Restaurante({
                nome,
                restaurante,
                especialidades,
                rua
            });

            restaurante.save()
                .then((restaurante)=>{
                res.status(201).json(restaurante);
                })
                .catch(err => next(err));
        } catch (e) {
        return res.status(401).json({error: 'erro'});
        }
    }catch (e) {
        return res.status(401).json({error: 'erro'});
    }
}

const adicionarComentario = (req, res)=>{
    const { id } = request.params
    const { avaliacao, nota } = request.body
    Restaurante.findByIdAndUpdate(id, {comentario})
    try{
        const comentario= new Restaurante.comentario({
            avaliacao,
            nota
        });
        comentario.push()
            .then((comentario)=>{
            res.status(201).json(comentario);
            })
            .catch(err => next(err));
    } catch (e) {
    return res.status(401).json({error: 'erro'});
    }
}

module.exports = {
    todosRestaurantes,
    restaurantePorId, 
    cadastroRestaurante,
    adicionarComentario
}
