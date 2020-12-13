
const yup = require('yup')

/**
 * Personalizando mensagens de erro para atributo User
 */
yup.setLocale({
    string: {
      email: 'Esse e-mail não é válido',
      min: 'A senha precisa ter no mínimo 8 caracteres'
    },

    date: {
        nascimento: 'Essa data não é válida',
    }
  })
  
  /**
 * Declarar a validação para atributo User
 */

  exports.userSchema = yup.object().shape({
    nome: yup.string().required('Esse campo é obrigatório'),
    sobrenome: yup.string().required('Esse campo é obrigatório'),
    endereco: yup.string().required('Esse campo é obrigatório'),
    nascimento: yup.date().required('Esse campo é obrigatório'),
    email: yup.string().email().required('Esse campo é obrigatório'),
    senha: yup.string().min(8).required('Esse campo é obrigatório')
  }).required('Esse objeto não pode ser vazio');