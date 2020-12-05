const bcrypt = require('bcrypt')

exports.senhahash = async (senha, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashearSenha = await bcrypt.hash(senha, salt)
    return hashearSenha
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      errors: ['Aconteceu algo de errado ao salvar a senha']
    })
  }
}