const { response, request } = require("express")
const mongoose = require("mongoose")
const Recipe = require("../models/Receita.js")
const bcrypt = require("bcrypt")

const getAll = (request, response) => {
    Recipe.find()
        .then((recipes) => {
            response.status(200).json(recipes);
        })
        .catch(err => {
            response.status(400).json({ message: "erro" })
        })
}

const getId = (req, res) => {
    const { id } = req.params
    Recipe.findById(id)
        .then((recipes) => {
            res.status(200).json(recipes);
        })
        .catch(err => next(err));
}

const getByTitle = (request, response) => {
    let { nomeReceita } = request.query
    Recipe.find({ nomeReceita: nomeReceita })
        .then((recipes) => {
            response.status(200).json(recipes);
        })
        .catch(err => {
            response.status(400).json({ message: "erro" })
        })

}

const getByMainIngredient = (request, response) => {
    let { ingredientePrincipal } = request.query
    Recipe.find({ ingredientePrincipal: ingredientePrincipal })
        .then((recipes) => {
            response.status(200).json(recipes);
        })
        .catch(err => {
            response.status(400).json({ message: "erro" })
        })

}

const getByTypeFood = (request,response) => {
    let { tipoReceita } = request.query
    Recipe.find({  tipoReceita : tipoReceita })
        .then((recipe) => {
            response.status(200).json(recipe);
        })
        .catch(err => {
            response.status(400).json({ message: "erro" })
        })

}

const getByChoseRecipe = (request, response) => {
    //if({receitaSelecionada == true}) {
        //response.status(400).json({ message: "Não existe nenhuma receita selecionada" })
        //return;
    //} else {
        Recipe.find ({receitaSelecionada: true })
              .then((recipes) => {
                 response.status(200).json(recipes)
              })
              .catch(err => {
                  response.status(400).json({ message: "erro"})
              })
    //}      
}

const getByNoChoseRecipe = (request, response) => {
    Recipe.find ({receitaSelecionada: false })
          .then((recipes) => {
              response.status(200).json(recipes)
          })
          .catch(err => {
              response.status(400).json({ message: "erro"})
          })
}



const createRecipe = (request, response) => {
    let { nomeReceita, ingredientePrincipal, ingredientes, preparo, observacoes,tipoReceita,receitaSelecionada } = request.body

    const newRecipe = new Recipe({
        nomeReceita,
        ingredientePrincipal,
        ingredientes,
        preparo,
        observacoes,
        tipoReceita,
        receitaSelecionada, 

    });

    newRecipe.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));
}

const updateRecipe = (request, response) => {
    const { id } = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: " ID não é válido" });
        return;
    } else {
        Recipe.findByIdAndUpdate(id, request.body)
            .then(() => {
                response.status(200).json({ message: `Sua receita foi atualizada.` });
            })
            .catch((err) => {
                response.json(err);
            });
    }

}

const uptdateChosenRecipe = (request, response) => {
    const { id } = request.params
    const { receitaSelecionada } = request.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID não é válido" })
        return;
    }else{
    Recipe.findByIdAndUpdate ( id, {$set: {receitaSelecionada}})
          .then ((recipe) => {
              response.status(200).json ({ message: "Receita Selecionada"})
          })
          .catch ((err) => {
              response.json(err)
          })
    }      

}

const updateIngredients = (req, res) => {
    const { id } = req.params
    const { ingredientes } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID não é válido" })
        return;
    } else {
        Recipe.findByIdAndUpdate(id, { $set: { ingredientes } })
            .then(() => {
                res.status(200).json({ message: `Os ingredientes da receita foram atualizados` })
            })
            .catch((err) => {
                res.json(err)
            })

    }
}

const updateMainIngredient = (req, res) => {
    const { id } = req.params
    const { ingredientePrincipal } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID não é válido" })
        return;
    } else {
        Recipe.findByIdAndUpdate(id, { $set: { ingredientePrincipal } })
            .then(() => {
                res.status(200).json({ message: `Os ingredientes principal da receita foi atualizado` })
            })
            .catch((err) => {
                res.json(err)
            })

    }
}

const updateTitle = (req, res) => {
    const { id } = req.params
    const { nomeReceita } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID não é válido" })
        return;
    } else {
        Recipe.findByIdAndUpdate(id, { $set: { nomeReceita } })
            .then(() => {
                res.status(200).json({ message: `O nome da receita foi atualizado` })
            })
            .catch((err) => {
                res.json(err)
            })

    }
}

const updateType = (req, res) => {
    const { id } = req.params
    const { tipoReceita } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID não é válido" })
        return;
    } else {
        Recipe.findByIdAndUpdate(id, { $set: { tipoReceita } })
            .then(() => {
                res.status(200).json({ message: `O tipo de receita foi modificado` })
            })
            .catch((err) => {
                res.json(err)
            })

    }
}

const updatePreparation = (req, res) => {
    const { id } = req.params
    const { preparo } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID não é válido" })
        return;
    } else {
        Recipe.findByIdAndUpdate(id, { $set: { preparo } })
            .then(() => {
                res.status(200).json({ message: `O modo de preparo foi modificadp` })
            })
            .catch((err) => {
                res.json(err)
            })

    }
}

const updateComment = (req, res) => {
    const { id } = req.params
    const { observacoes } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID não é válido" })
        return;
    } else {
        Recipe.findByIdAndUpdate(id, { $set: { observacoes } })
            .then(() => {
                res.status(200).json({ message: `O campo observações foi modificado` })
            })
            .catch((err) => {
                res.json(err)
            })

    }
}


const deleteRecipe = (req, res) => {
    const { id } = req.params

    Recipe.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json("Sua receita foi apagada")
        })
        .catch((err) => {
            throw new Error(err)
        });
}


module.exports = {
    getAll,
    getId,
    getByTitle,
    getByMainIngredient,
    getByTypeFood,
    getByChoseRecipe,
    getByNoChoseRecipe,
    createRecipe,
    updateRecipe,
    uptdateChosenRecipe, 
    updateIngredients,
    updateMainIngredient,
    updateTitle,
    updateType,
    updatePreparation,
    updateComment, 
    deleteRecipe
}

