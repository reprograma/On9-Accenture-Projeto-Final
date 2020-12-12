const mongoose = require("mongoose");
const TransitAgentUser = require("../models/TransitAgents");
const AmbulancesUser = require("../models/Ambulances");
const MessageSend = require("../models/Messages");

exports.get = (req, res, next) => {
  MessageSend.find()
    .then((messages) => {
      resp.status(200).json(messages);
    })
    .catch((err) => next(err));
};

exports.postNewMessage = (req, res, next) => {
  let { id } = req.body;

  if (AmbulancesUser.findById(id, function (err, AmbulancesUser) {})) {
    const newMessageAmbulance = MessageSend({
      driverName: AmbulancesUser.driverName,
      licensePlate: AmbulancesUser.licensePlate,
      locationAmbulance: req.body.locationAmbulance,
      destinationHospital: req.body.destinationHospital,
      telephoneNumberAmbulance: AmbulancesUser.telephoneNumberAmbulance,
      routesToHopital: req.body.routesToHopital,
    });
    newMessageAmbulance
      .save()
      .then((newMessageAmbulance) => {
        return res.status(201).json(newMessageAmbulance);
      })
      .catch((err) => next(err));
  } else if (TransitAgentUser.findById(id, function (err, TransitAgentUser) {})
  ) {
    const newMessageAgent = new MessageSend({
      transitAgentName: TransitAgentUser.transitAgentName,
      transitAgentlocation: req.body.transitAgentlocation,
      telephoneNumberAgent: TransitAgentUser.telephoneNumberAgent,
    });
    newMessageAgent
      .save()
      .then((newMessageAgent) => {
        return res.status(201).json(newMessageAgent);
      })
      .catch((err) => next(err));
  } else {
    return "não usuário com esse id";
  }
};
