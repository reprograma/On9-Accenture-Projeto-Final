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

const getByingredient = (request, response) => {
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
    getByingredient,
    getByTypeFood,
    createRecipe,
    updateRecipe,
    updateIngredients,
    deleteRecipe
}

