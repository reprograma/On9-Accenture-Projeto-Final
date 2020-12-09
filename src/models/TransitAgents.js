const mongoose = require("mongoose");

const transitAgentSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    transitAgentName: { type: String, required: true },
    hashPass: String,
    transitAgentCPF: { type: String, required: true, unique: true },
    transitAgentlocation: { type: String, required: true },
    telephoneNumberAgent: { type: String, required: true },
  },
  { timestamps: true }
);

const TransitAgentUser = mongoose.model("TransitAgentUser", transitAgentSchema);

module.exports = TransitAgentUser;
