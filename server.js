const app = require("./src/app")
const port = 3000

app.listen(process.env.PORT || port, function(){
  console.log(`APi rodando na porta ${port}`)
})