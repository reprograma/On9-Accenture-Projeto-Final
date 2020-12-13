const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    title: "API Blackflix",
    dev: "Jennyffer de Morais",
    version: "0.0.1",
    site: "https://blackflix.vercel.app/",
  });
});

module.exports = router;
