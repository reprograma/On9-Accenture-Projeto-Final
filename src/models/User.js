const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, trim: true, required: true },
    tipo: { type: Number, required: true, default: 2 }, // tipo 1 = adm , tipo 2 = usuário comum
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
