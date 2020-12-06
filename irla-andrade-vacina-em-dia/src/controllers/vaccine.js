const Vaccine = require('../models/Vaccine')
const User = require('../models/User')

exports.getVaccine = (req, res, next) => {
  Vaccine.find()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
}

exports.getVaccineById = (req, res, next) => {
  const { id } = req.params
  Vaccine.findById(id)
    .then((vaccine) => {
      res.status(200).json(vaccine)
    })
    .catch(err => next(err))
    //vaccine.create. retornar vacina nova para o método
}

// function getByName(name) {
//   Vaccine.findOne(name).then((response) => {
//     return response
//   }).catch(err => next(err))
// }

// function getVaccineByName(name, dose, avoidedDiseases) {
  // var query = { name: name },
  // update = { name: name, dose: dose, avoidedDiseases: avoidedDiseases },
  // options = { upsert: true, new: true, setDefaultsOnInsert: true };
  // Vaccine.findOneAndUpdate(query, update, options, function(error, vaccine) {
  //   if(vaccine) {
  //     return vaccine
  //   } else {
  //     console.log(error)
  //     return error
  //   }
  // })
// }


//Pesquisar pelo nome
//Se vacina existe, vincular ao usuário que tomou a vacina
// Se vacina não existe, registrar nova vacina (chamar o método que registra nova vacina)
//getvacinabyname

exports.registerVaccine = async (req, res, next) => {
  const { name, dose, avoidedDiseases } = req.body

  const newVaccine = new Vaccine({
    name,
    date: new Date().toString(),
    dose,
    avoidedDiseases
  })

  newVaccine.save()
    .then(vaccine => {
      res.status(201).json(vaccine)
    })
    .catch(err => next(err))
}

//chamar o método getvacinabyname
// exports.insertVaccineCard = async (req, res, next) => {
//   user = req.params
//   id = user.id

//   const { name, dose, avoidedDiseases } = req.body
//   console.log(name)
//   let vaccine = getVaccineByName(name, dose, avoidedDiseases)
//   try{
//     const newVaccineTaken = vaccine
//     console.log("Vaccine", newVaccineTaken)
//     const userById = await User.findById(id)
//     userById.vaccinesTaken.push(newVaccineTaken)
//     await userById.save()
//   } catch(e) {
//     return res.status(400).json(e)
//   }

// }

// exports.insertVaccineCard = async (req, res, next) => {
//   user = req.params
//   id = user.id

//   const { name, dose, avoidedDiseases } = req.body
//   try{
//     const newVaccineTaken = await Vaccine.create({
//       name,
//       dose,
//       avoidedDiseases
//     })

//     await newVaccineTaken.save()
//       .then((vaccine) => {
//         res.status(201).json(vaccine)
//       })
//       .catch(err => next(err))

//     const userById = await User.findById(id)
//     userById.vaccinesTaken.push(newVaccineTaken)
//     await userById.save()
//   } catch(e) {
//     return res.status(400).json(e)
//   }
// }

exports.insertVaccineCard = async (req, res, next) => {
  user = req.params
  id = user.id

  const { name } = req.body
  try{
    const newVaccineTaken = await Vaccine.findOne({ name: name })

    const userById = await User.findById(id)
    userById.vaccinesTaken.push(newVaccineTaken)
    await userById.save()
      .then((user) => {
        res.status(200).json(user)
      })
      .catch(err => next(err))
  } catch(e) {
    return res.status(400).json(e)
  }
}

// exports.insertVaccineCard = async (req, res, next) => {
//   user = req.params
//   id = user.id

//   const { name } = req.body
//   try{
//     const newVaccineTaken = await Vaccine.findOne({ name: name })
//       .then(async existingVaccine => {
//         if(existingVaccine) {
//           return res.status(404).json({ error: [`Vacina não cadastrada.`]})
//         }
//       })

//     const userById = await User.findById(id)
//     userById.vaccinesTaken.push(newVaccineTaken)
//     await userById.save()
//       .then((user) => {
//         res.status(200).json(user)
//       })
//       .catch(err => next(err))
//   } catch(e) {
//     return res.status(400).json(e)
//   }
// }

exports.deleteVaccine = (req, res) => {
  const { id } = req.params

  Vaccine.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: `Vacina deletada com sucesso.`})
    })
    .catch(err => {
      throw new Error(err)
    })
}