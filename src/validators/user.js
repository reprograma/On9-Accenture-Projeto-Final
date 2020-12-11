const yup = require('yup')

/*yup.setLocale({
  string: {
    email: 'Esse e-mail não é válido',
    min: 'A senha precisa ter no mínimo 8 caracteres'
  }
}) */

exports.signupUserSchema = yup.object().shape({
  name: yup.string().required('O campo name é obrigatório'),
  email: yup.string().required('O campo e-mail é obrigatório'),
  password: yup.string().min(8).required('O campo password é obrigatório'),
  city: yup.string().required('O campo city é obrigatório'),
  type: yup.string().required('O campo type é obrigatório'),
  description: yup.string().required('O campo description é obrigatório')
}).required('Esse objeto não pode ser vazio')