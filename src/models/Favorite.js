const mongoose = require("mongoose");

const favoritoSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    isFavorite: {
        type: Boolean,
        required: true,
        default: true
    }
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", favoritoSchema);

module.exports = Favorite;
