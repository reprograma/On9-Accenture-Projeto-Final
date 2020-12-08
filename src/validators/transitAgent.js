const yup = require("yup");

exports.transitAgentSchema = yup
  .object()
  .shape({
    email: yup.string().required("Email é obrigatório."),
    password: yup.string().required("A senha é obrigatória."),
    transitAgentName: yup
      .string()
      .required("O nome do agente de trânsito é obrigatório"),
    transitAgentCPF: yup
      .string()
      .min(11)
      .required("O número do CPF é obrigatório."),
    transitAgentlocation: yup.string().required("Sua locação é obrigatória."),
    telephoneNumberAgent: yup.string().min(11).required(
      "Seu número de telefone com o DDD é obrigatório."
    ),
    transitAgentId: yup.string().required("O id do usuário é obrigatório."),
  })
  .required("O formulário não pode ser vazio.");
