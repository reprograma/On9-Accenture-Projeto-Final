/**
 * Module dependencies.
 */
const app = require("./src/app");
const port = process.env.PORT;

/**
 * Start Express server.
 */

app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});

