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
    routesToHopital: { type: Number, required: false },
    telephoneNumberAmbulance: { type: Number, required: true },
  },
  { timestamps: true }
);

const AmbulancesUser = mongoose.model("AmbulancesUser", ambulanceSchema);

module.exports = AmbulancesUser;
