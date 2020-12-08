const mongoose = require("mongoose");
const MessagesSend = require("../models/Messages");

exports.get = (req, res, next) => {
    AmbulanceUser.find()
      .then((messages) => {
        resp.status(200).json(messages);
      })
      .catch((err) => next(err));
  };

  exports.postCreateNewMessageAmbulance = async (messageSendAmbulance, ambulanceId) => {
    const newMessage = new Messages ({
        ambulanceId: MessagesSend.id,
        driverName: MessagesSend.driverName,
        licensePlate: MessagesSend.licensePlate,
        locationAmbulance: MessagesSend.locationAmbulance,
        destinationHospital: MessagesSend.destinationHospital,
        routesToHopital: MessagesSend.routesToHopital,
    })
    try {
        return await newMessage.save()
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}