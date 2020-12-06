const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    url: { type: String, required: true },
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categoria",
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
