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

/** const postNewMessage = (req, res, next) => {
    let { id } = req.body

    if (id == AmbulancesUser.findById(AmbulancesUser._id)){
        const newMessageAmbulance = newMessageSend({
            driverName: AmbulancesUser.driverName, 
            licensePlate: AmbulancesUser.licensePlate,
            locationAmbulance: req.body.locationAmbulance,
            destinationHospital: req.body.destinationHospital,
            telephoneNumberAmbulance: telephoneNumberAmbulance, 
            routesToHopital: req.body.routesToHopital,
            messageWrite: req.body.messageWrite,
            messageTitle: req.body.messageTitle,
        })
        newMessageAmbulance.save().then((res) => {
            res.status(201).json(res)
        })
        .catch((err) => next(err))
    }
    if (id == TransitAgentUser.findById(TransitAgentUser._id)){
        const newMessageAmbulance = new MessageSend({
            driverName, 
            licensePlate,
            locationAmbulance,
            destinationHospital,
            telephoneNumberAmbulance, 
            routesToHopital,
            messageWrite,
            messageTitle,
        })
        newMessageAmbulance.save().then((res) => {
            res.status(201).json(res)
        })
        .catch((err) => next(err))
    }
}*/

 /** const MessageAmbulance = async (req, res) => {
  let { ambulanceId } = req.body;
  let { transitAgentId } = req.body;

TransitAgentUser.findById(transitAgentId).then((userFind) => {
    AmbulancesUser.findById(ambulanceId).then((agent) => {
      agent.messageSending.push(userFind._id);
      agent.save().then(() => {
        messageSending = {
          messageTitle,
          messageWrite,
          driverName,
          licensePlate,
          locationAmbulance,
          destinationHospital,
          telephoneNumberAmbulance,
          routesToHopital,
        };
        MessageSend.create(messageSending).then(() => {
          res.send("The message was sending.");
        });
      });
    });
  });
};
*/ 
/**  exports.newMessageAmbulance = async (req, res) => {
      const validateIdAmbulance = wait AmbulancesUser.validate(req.body)

      return AmbulancesUser.findeById({ ambulanceId: validateIdAmbulance.ambulanceId }).then(
          async (existingDriver) => {
              if(existingDriver) {
                  const newMessageAmbulance = new MessageSend({
                      driverId: ambulanceId,
                      userName: driverName,
                      licensePlate: licensePlate,
                      locationAmbulance: locationAmbulance,
                      destinationHospital: destinationHospital,
                      telephoneNumberAmbulance: telephoneNumberAmbulance, 
                      routesToHopital: routesToHopital,
                      messageWrite: messageWrite,
                      messageTitle: messageTitle
                  })
                  try{
                      return await newMessageAmbulance.save()
                  } .catch((e) => {
                      console.log(e)
                      return res.status(303).json({errors: ["There is an error into created."]})
                  })
              }
          }
      )
  }*/

/**  exports.postCreateMsgAgent = async (req, res, next) => {
      const { id } = req.body
      const transitAgent = await TransitAgentUser.findById(id).then(transitAgent) => {
          
        const newMessageAgent = new MessageSend({
        transitAgentName,
        transitAgentCPF,
        transitAgentlocation,
        telephoneNumberAgent,
        messageTitle,
        messageWrite
      });

      newMessageAgent.save().then((messageSend) => {
          res.status(201).json(messageSend);
        })
        .catch((err) => next(err));
    } catch (e) {
      return res.status(401).json({ error: "erro" });
    }
}
*/

module.exports = {
    postNewMessage
};
