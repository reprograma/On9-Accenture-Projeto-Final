const mongoose = require('mongoose')
const User = require('../models/User')
const { signupUserSchema } = require('../validators/user')
const bcrypt = require('bcrypt')
const bcryptSalt = 8

exports.getAll = (req, res, next) => {
  User.find()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => next(err))
}

exports.getByCity = (req, res) => {
    const {city}  = req.query;
  
      User.find({city: city})
        .then((user) => {
            res.status(200).json(user)
        }) 
        .catch((error) => {
              res.status(400).json({ error: 'City not found' })
        })
}
  
exports.getByGameType = (req, res) => {
    const {type} = req.query;
  
   User.find({type: type})
        .then((user) => {
            res.status(200).json(user)
        }) 
        .catch((error) => {
            res.status(400).json({ error: 'Type not found' })
        })
}

exports.signup = async (req, res) => {
  const { password } = req.body
  const salt = bcrypt.genSaltSync(bcryptSalt)

  try {
    const validatedBody = await signupUserSchema.validate(req.body)

    const user = new User(validatedBody)

    User.findOne({ email: validatedBody.email })
      .then(async (existingUser) => {
        if (existingUser) {
          return res.status(400).json({
            error: [`User already exists`]
          })
        }

        const passwordHashed = await bcrypt.hashSync(password, salt)
        user.password = passwordHashed

        user.save()
          .then((user) => res.status(200).json(user))
          .catch((err) => {
            return res.status(500).json(err)
          })
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  } catch (e) {
    return res.status(400).json(e)
  }
}

exports.updateType = (req, res) => {
  const { id } = req.params
  const { type } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: `The specified ID is not valid.` })
    return
  }
  User.findByIdAndUpdate(id, { $set: { type } })
    .then(() => {
      res.status(200).json({
        message: `The user game type of id: ${req.params.id} has been updated successfully.`
      })
    })
    .catch((err) => {
      res.json(err)
    })
}

exports.updateDescription = (req, res) => {
    const { id } = req.params
    const { description } = req.body
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: `The specified ID is not valid.` })
      return
    }
    User.findByIdAndUpdate(id, { $set: { description } })
      .then(() => {
        res.status(200).json({
          message: `The user's description of id: ${req.params.id} has been updated successfully.`
        })
      })
      .catch((err) => {
        res.json(err)
      })
  }

exports.deleteUser = (req, res) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: `User successfully deleted.` })
    })
    .catch((err) => {
      throw new Error(err)
    })
}
