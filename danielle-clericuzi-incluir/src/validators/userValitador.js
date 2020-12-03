
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
    nome: yup.string().nome().required('Esse campo é obrigatório'),
    sobrenome: yup.string().sobrenome().required('Esse campo é obrigatório'),
    nascimento: yup.date().nascimento().required('Esse campo é obrigatório'),
    email: yup.string().email().required('Esse campo é obrigatório'),
    password: yup.string().min(8).required('Esse campo é obrigatório'),
    cidade: yup.string().required('Esse campo é obrigatório')
  }).required('Esse objeto não pode ser vazio');