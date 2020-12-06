const mongoose = require("mongoose");

const transitAgentSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    transitAgentName: { type: String, required: true },
    transitAgentCPF: { type: String, required: true, unique: true },
    transitAgentlocation: { type: String, required: true },
    telephoneNumber: { type: Number, required: true },
    readConfirmation: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const TransitAgent = mongoose.model("TransitAgent", transitAgentSchema);

module.exports = TransitAgent;
