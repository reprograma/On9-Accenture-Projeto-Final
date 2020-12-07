const mongoose = require("mongoose");

const transitAgentSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    transitAgentName: { type: String, required: true },
    transitAgentCPF: { type: String, required: true, unique: true },
    transitAgentlocation: { type: String, required: true },
    telephoneNumberAgent: { type: Number, required: true },
  },
  { timestamps: true }
);

const TransitAgentUser = mongoose.model("TransitAgentUser", transitAgentSchema);

module.exports = TransitAgentsUser;
