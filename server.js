const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});


