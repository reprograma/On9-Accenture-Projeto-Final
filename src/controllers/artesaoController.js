const artesaos = require("../models/artesaos.json")

const getAll = (requisicao, resposta) => {
    resposta.status(200).send(artesaos)
} 

const getByTecnica = (requisicao, resposta) =>{
    const { tecnica } = requisicao.query
    
    const artesaos = artesaos.find(artesaos => artesaos.tecnica == tecnica)

    resposta.status(200).send(artesaos)
}

const criarPostagem = (requisicao, resposta) => {
    const {id, tecnica, descricao, estado} = requisicao.body

    const novoId = tarefaId.length > 0 ? Math.max.apply(Math, novaPostagem) + 1 : 1

    const novaPostagem = {
        id: novoId,
        tecnica: tecnica,
        descricao: descricao,
        estado: estado,
    }
    artesaos.push(novaPostagem)

    resposta.status(201).json(novaPostagem)

}

const deletarPostagem = (requisicao, resposta) => {
    const id = requisicao.params.id

    artesaos.filter(artesaos => artesaos.id != id)

    resposta.status(204).send(artesaos)

}


module.exports = {
    getAll,
    getByTecnica,
    criarPostagem,
    deletarPostagem

}
