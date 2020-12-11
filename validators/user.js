const yup = require("yup")


yup.setLocale({
  string: {
    email: "Esse e-mail não é válido",
    min: 'A senha precisa ter no mínimo 6 caracteres'
  }
})


exports.signupSchema = yup.object().shape({
  email: yup.string().email().required('Esse campo é obrigatório'),
  password: yup.string().min(8).required('Esse campo é obrigatório'),
}).required('Esse objeto não pode ser vazio')
