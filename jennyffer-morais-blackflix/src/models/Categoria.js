const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  cor: { type: String, required: true },
  canal: { type: String, required: true },
  url: { type: String, required: true },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

module.exports = Categoria;
