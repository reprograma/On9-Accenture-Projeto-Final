const lawCollection = require("../models/lawSchema")

const getAll = (request, response)=>{
    console.log(request.url)

    lawCollection.find((error, direitos) =>{
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).send({
                mensagem: "GET with sucess",
                laws
            })
        }
    })
}

const addLaw = (request, response)=>{
    const lawBody = request.body //pegando o body que o usuario digitou
    const law = new lawCollection(lawBody)//criando um novo dado com o body

    law.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST with sucess",
                law
            })
        }
    })
}

const updateLaw = (request, response) =>{
    const { id } = request.params 
    const { concluido, descricao, nomeColaborador } = request.body 

    const tarefaAtualizada = tarefasModels.find(tarefa => tarefa.id == id) 

    const newLaw = { 
        id: updatedLaw.id, 
        dataInclusion: updatedLaw.dataInclusion, 
        description: description, 
        collaboratorName: collaboratorName
    }

    const index = lawsModels.indexOf(updatedLaw) 

    lawsModels[index] = newLaw

    response.status(200).json(lawsModels[index])

}

const deleteLaw = (request, response)=>{
    const { id } = request.params
    const lawFiltered = lawsModels.find(law => law.id == id)

    const index = lawsModels.indexOf(lawFiltered)
    lawsModels.splice(index, 1)

    response.json({mensagem: "Law deleted with sucess"})
}

module.exports = {
    getAll,
    addLaw,
    updateLaw,
    deleteLaw

}