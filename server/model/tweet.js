// creating tweet schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    tweet: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
