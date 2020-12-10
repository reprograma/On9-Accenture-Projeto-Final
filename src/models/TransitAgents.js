const mongoose = require("mongoose");

const transitAgentsSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    transitAgentName: { type: String, required: true },
    hashPass: String,
    transitAgentCPF: { type: String, required: true, unique: true },
    telephoneNumberAgent: { type: String, required: true }
  },
  { timestamps: true }
);

const TransitAgentUser = mongoose.model("TransitAgentUser", transitAgentsSchema);

module.exports = TransitAgentUser;
