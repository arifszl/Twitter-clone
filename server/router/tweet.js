import express from "express";
import Tweet from "../model/tweet.js";
import { isloggedin } from "../middleware.js";

const tweetRouter = express.Router();

tweetRouter.get("/gettweet", async (req, res) => {
  const tweets = await Tweet.find().populate({ path: "user" });
  console.log(tweets);
  res.status(200).json(tweets);
});

tweetRouter.post("/posttweet", isloggedin, async (req, res) => {
  const { tweet, user } = req.body;

  const tweetpost = new Tweet({ tweet: tweet });
  tweetpost.user = user;
  await tweetpost.save();
  res.status(200).json({ message: "Tweet posted" });
});

tweetRouter.delete("/deletetweet", async (req, res) => {
  const { id } = req.body;
  let ids = id.id;

  await Tweet.findByIdAndDelete(ids);
  res.status(200).json({ message: "Tweet deleted" });
});

export default tweetRouter;
