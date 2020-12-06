const Video = require("../models/Video");
const { videoSchema } = require("../validators/video");

exports.getAll = async (req, res) => {
  try {
    Video.find({})
      .exec()
      .then(async (videos) => {
        const status = videos && videos.length > 0 ? 200 : 204;

        return res.status(status).send(videos);
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    Video.findById(id)
      .exec()
      .then(async (video) => {
        const status = videos && videos.length > 0 ? 200 : 204;

        return res.status(status).send(videos);
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};
