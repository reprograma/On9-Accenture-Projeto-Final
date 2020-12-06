const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    ambulanceId: { Type: Schema.types.ObjectId, ref: 'AmbulanceUser', required: true },
    driverName: { Type: Schema.types.ObjectId, ref: 'AmbulanceUser', required: true },
    licensePlate: { Type: Schema.types.ObjectId, ref: 'AmbulanceUser', required: true },
    locationAmbulance: { Type: Schema.types.ObjectId, ref: 'AmbulanceUser', required: true },
    destinationHospital: { Type: Schema.types.ObjectId, ref: 'AmbulanceUser', required: true },
    telephoneNumberAmbulance: { Type: Schema.types.ObjectId, ref: 'AmbulanceUser', required: true },
    routesToHopital: { Type: Schema.types.ObjectId, ref: 'AmbulanceUser', required: true },
    transitAgentId: { Type: Schema.types.ObjectId, ref: 'TransitAgentUser', required: true },
    transitAgentName: { Type: Schema.types.ObjectId, ref: 'TransitAgentUser', required: true },
    transitAgentlocation: { Type: Schema.types.ObjectId, ref: 'TransitAgentUser', required: true },
    telephoneNumberAgent: { Type: Schema.types.ObjectId, ref: 'TransitAgentUser', required: true },
    readConfirmation: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const MessagesSend = mongoose.model("MessagesSend", MessagesSend);

module.exports = MessagesSend;