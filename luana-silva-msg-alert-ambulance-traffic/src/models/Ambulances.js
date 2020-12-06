const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    driverName: { type: String, required: true },
    driverCPF: { type: String, required: true, unique: true },
    licensePlate: { type: String, required: true },
    location: { type: String, required: true },
    destination: { type: String, required: true },
    telephoneNumber: { type: Number, required: true },
  },
  { timestamps: true }
);

const Ambulance = mongoose.model("Ambulance", ambulanceSchema);

module.exports = Ambulance;
