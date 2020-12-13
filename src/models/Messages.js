const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    ambulanceId: { type: mongoose.Schema.Types.ObjectId, ref: "AmbulanceUser" },
    driverName: { type: mongoose.Schema.Types.ObjectId, ref: "AmbulanceUser" },
    licensePlate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AmbulanceUser",
    },
    locationAmbulance: { type: String },
    destinationHospital: { type: String },
    telephoneNumberAmbulance: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AmbulanceUser",
    },
    routesToHopital: { type: String },
    transitAgentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransitAgentUser",
    },
    transitAgentName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransitAgentUser",
    },
    transitAgentlocation: { type: String },
    telephoneNumberAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransitAgentUser",
    },
    readConfirmation: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const MessagesSend = mongoose.model("MessagesSend", messageSchema);

module.exports = MessagesSend;
