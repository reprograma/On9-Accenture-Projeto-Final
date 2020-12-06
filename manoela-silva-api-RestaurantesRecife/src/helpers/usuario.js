const bcrypt = require('bcrypt')

exports.senhaHash = async (senha, salt, res) => {
  
  try {
    console.log(senha)
    const hashearSenha = await bcrypt.hash(senha, salt)
    console.log(hashearSenha)
    return hashearSenha
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      errors: ['Aconteceu algo de errado ao salvar a senha']
    })
  }
}