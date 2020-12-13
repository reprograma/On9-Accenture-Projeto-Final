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

exports.getById = (req, res) => {
    const id = req.params.id;
    MessageSend
      .findById(id)
      .then((messages) => {
        res.status(200).json(messages);
      })
      .catch((err) => next(err));
  };

exports.postNewMessage = async (req, res, next) => {
  let { id } = req.body;
  const userAmbulance = await AmbulancesUser.findById(
    id,
    function (err, AmbulancesUser) {}
  );
  const userAgent = await TransitAgentUser.findById(
    id,
    function (err, TransitAgentUser) {}
  );

  //if (AmbulancesUser.findById(id, function (err, AmbulancesUser) {})) {
  if (userAmbulance) {
    const newMessageAmbulance = MessageSend({
      locationAmbulance: req.body.locationAmbulance,
      destinationHospital: req.body.destinationHospital,
      routesToHopital: req.body.routesToHopital,
      userAmbulance
    });
    newMessageAmbulance
      .save()
      .then((newMessageAmbulance) => {
        return res.status(201).json(newMessageAmbulance);
      })
      .catch((err) => next(err, "There is not an user with this id."));
  } else if (userAgent) {
    const newMessageAgent = new MessageSend({
      transitAgentlocation: req.body.transitAgentlocation,
    });
    newMessageAgent
      .save()
      .then((newMessageAgent) => {
        return res.status(201).json(newMessageAgent + userAgent);
      })
      .catch((err) => next(err, "There is not an user with this id."));
  } else {
    return "There is not an user with this id";
  }
};
