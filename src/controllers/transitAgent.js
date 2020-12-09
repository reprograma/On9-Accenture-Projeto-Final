const mongoose = require("mongoose");
const TransitAgentUser = require("../models/TransitAgents");
const MessageSend = require('../models/Messages')
const { signupSchema } = require("../validators/transitAgent");
const bcrypt = require("bcrypt");
const Messages = require("../models/Messages");
const { DateSchema } = require("yup");
const bcryptSalt = 8;

exports.get = (req, res, next) => {
  TransitAgentUser.find()
    .then((transitAgents) => {
      resp.status(200).json(transitAgents);
    })
    .catch((err) => next(err));
};

exports.getById = (req, res) => {
  const id = req.params.id;
  transitAgents
    .findById(id)
    .then((transitAgent) => {
      res.status(200).json(transitAgent);
    })
    .catch((err) => next(err));
};

//exports.getMessageAmbulanceSent = (req, res, next) => {
 //   const todayDate = () => new Date().toString();
    //if (todayDate == MessagesSend.DateSchema){
 //     .then((Messages) => {
 //       resp.status(200).json(Messages);
//      })
//      .catch((err) => next(err));
//    }
//  };

exports.postCreateAgent = async (req, res, next) => {
  const {
    email,
    transitAgentName,
    password,
    transitAgentCPF,
    transitAgentlocation,
    telephoneNumberAgent
  } = req.body;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  try {
    const hashPass = await bcrypt.hashSync(password, salt);

    const newAgent = new TransitAgentUser({
      email,
      transitAgentName,
      hashPass,
      transitAgentCPF,
      transitAgentlocation,
      telephoneNumberAgent
    });
    newAgent
      .save()
      .then((transitAgent) => {
        res.status(201).json(transitAgent);
      })
      .catch((err) => next(err));
  } catch (e) {
    return res.status(401).json({ error: "erro" });
  }
};

exports.postCreateNewMessageAgent = async (messageSendAgent, transitAgentId) => {
    const newMessage = new Messages ({
        transitAgentId: MessagesSend.id,
        transitAgentName: MessagesSend.transitAgentName,
        transitAgentlocation: MessagesSend.transitAgentlocation,
        telephoneNumberAgent: MessagesSend.telephoneNumberAgent,
        readConfirmation: MessagesSend.readConfirmation,
        dateSendAgent: MessagesSend.DateSchema
    })
    try {
        return await newMessage.save()
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}