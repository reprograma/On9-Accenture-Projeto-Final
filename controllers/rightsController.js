const rights = require("../models/rightsSchema")

const getAll = (request, response)=>{
    console.log(request.url)

    rights.find((error, rights) =>{
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).send({
                mensagem: "GET with sucess",
                rights
            })
        }
    })
}

const addRight = (request, response)=>{
    const rightBody = request.body //pegando o body que o usuario digitou
    const right = new rightsCollection(rightBody)//criando um novo dado com o body

    right.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST with sucess",
                right
            })
        }
    })
}

const updateRight = (request, response) =>{
    const { id } = request.params 
    const { dataInclusion, description, sourceInformation, CollaboratorName } = request.body 

    const rightUpdated = rightsModels.find(right => right.id == id) 

    const newRight = { 
        id: updatedLaw.id, 
        dataInclusion: updatedRight.dataInclusion, 
        description: description,
        sourceInformation: sourceInformation,
        collaboratorName: collaboratorName
    }

    const index = rightsModels.indexOf(rightUpdated) 

    rightsModels[index] = newRight

    response.status(200).json(rightsModels[index])

}

const deleteRight = (request, response)=>{
    const { id } = request.params
    const rightFiltered = rightsModels.find(right => right.id == id)

    const index = rightsModels.indexOf(rightFiltered)
    rightsModels.splice(index, 1)

    response.json({mensagem: "Right deleted with sucess"})
}

module.exports = {
    getAll,
    addRight,
    updateRight,
    deleteRight

}
