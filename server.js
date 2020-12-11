const app = require("./src/app")

const PORT = 3000

app.listen(PORT, function(){
    console.log(`App de acessibilidade rodando na porta ${PORT}!!!`)
})

/* const app = require("./src/app");
const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log(`app está rodando na porta ${port}`);
});
*/

