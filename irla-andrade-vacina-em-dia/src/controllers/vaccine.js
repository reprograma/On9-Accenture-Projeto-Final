const Vaccine = require('../models/Vaccine')
const User = require('../models/User')

exports.getVaccine = (req, res, next) => {
  Vaccine.find()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
}

exports.getVaccineById = (req, res) => {
  const { id } = req.params
  Vaccine.findById(id)
    .then((vaccine) => {
      res.status(200).json(vaccine)
    })
    .catch(err => next(err))
}

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

exports.insertVaccineCard = async (req, res, next) => {
  user = req.params
  id = user.id
  const { name, dose, avoidedDiseases } = req.body
  try{
    const newVaccineTaken = await Vaccine.create({
      name: name,
      dose: dose,
      avoidedDiseases: avoidedDiseases,
      userId: id
    })

    await newVaccineTaken.save()
      .then((vaccine) => {
        res.status(201).json(vaccine)
      })
      .catch(err => next(err))

    const userById = await User.findById(id)
    userById.vaccinesTaken.push(newVaccineTaken)
    await userById.save()
  } catch(e) {
    return res.status(400).json(e)
  }

}

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