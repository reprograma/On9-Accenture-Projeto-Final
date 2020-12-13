const yup = require("yup");

// Personalizando mensagens de erro
yup.setLocale({
  string: {
    email: "Esse e-mail não é válido",
    min: "A senha precisa ter no mínimo 8 caracteres",
  },
});

exports.signupSchema = yup
  .object()
  .shape({
    email: yup.string().email().required("Esse campo é obrigatório"),
    password: yup.string().min(8).required("Esse campo é obrigatório"),
    tipo: yup.number(),
  })
  .required("Esse objeto não pode ser vazio");
