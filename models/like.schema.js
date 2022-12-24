const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    like: {
      type: String,
      enum: ["like", "dislike"],
      required: true,
      default: like,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    likeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
