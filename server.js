const app = require("./src/app");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});

/*const app = require("./src/app")

const PORT = 3000

app.listen(PORT, function(){
    console.log(`App de acessibilidade rodando na porta ${PORT}!!!`)
})*/

