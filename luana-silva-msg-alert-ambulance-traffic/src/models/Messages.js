const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    ambulanceId: { Type: Schema.types.ObjectId, ref: 'Ambulance', required: true }
    transitAgentId: { Type: Schema.types.ObjectId, ref: 'transitAgent', required: true }
    helpLocation: { type: String, required: true },
    hospitalLocation: { type: String, required: true },
    date: { type: Date, required: true },
    exitTime: { type: String, required: true },
    licensePlate: { type: String, required: true },
    routesToHopital: { type: String, required: false }
    telephoneNumber: { type: Number, required: true },
    readConfirmation: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;