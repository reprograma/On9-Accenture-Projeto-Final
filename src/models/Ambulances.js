const mongoose = require("mongoose");

const ambulancesSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    driverName: { type: String, required: true },
    hashPass: String,
    driverCPF: { type: String, required: true, unique: true },
    licensePlate: { type: String, required: true },
    telephoneNumberAmbulance: { type: String, required: true },
  },
  { timestamps: true }
);

const AmbulancesUser = mongoose.model("AmbulancesUser", ambulancesSchema);

module.exports = AmbulancesUser;
