const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    driverName: { type: String, required: true },
    hashPass: String,
    driverCPF: { type: String, required: true, unique: true },
    licensePlate: { type: String, required: true },
    location: { type: String, required: true },
    destination: { type: String, required: true },
    routesToHopital: { type: String, required: false },
    telephoneNumberAmbulance: { type: String, required: true },
  },
  { timestamps: true }
);

const AmbulancesUser = mongoose.model("AmbulancesUser", ambulanceSchema);

module.exports = AmbulancesUser;
