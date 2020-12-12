const app = require("./src/app")
const port = 3001

app.listen(process.env.PORT || port, () => {
  console.log(`app está rodando na porta ${port}`)
})