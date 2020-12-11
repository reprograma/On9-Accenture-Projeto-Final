// const app = require('./src/app.js');
// const PORT = 8080;

// app.listen(PORT, () => { 
//     console.log(`A aplicação está rodando na porta ${PORT}`)
// })

const app = require("./src/app.js");
const port = 8080;

app.listen(process.env.PORT || port, () => {
  console.log(`app está rodando na porta ${port}`);
});