/**
 * Module dependencies.
 */
const app = require("./src/app");
const port = 8080;

/**
 * Start Express server.
 */

app.listen(process.env.PORT || port, () => {
  console.log(`app está rodando na porta ${port}`);
});

