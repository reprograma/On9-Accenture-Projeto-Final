const app = require("./src/app")
const port = 3001

app.listen(process.env.PORT || port, function() {
  console.log(`app está rodando na porta ${port}`)
})