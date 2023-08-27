import express from "express";
import mongoose from "mongoose";

import bodyParser from "body-parser";
import cors from "cors";
import tweetRouter from "./router/tweet.js";
import userRouter from "./router/user.js";
// import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./model/user.js";
import Tweet from "./model/tweet.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
// app.use(cookieParser());

// sessoion config for mern auth

const sessionConfig = {
  secret: "thisismysecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: "lax",
  },
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
    credentials: true,
  }),
);

app.use("/", userRouter);
app.use("/", tweetRouter);

mongoose
  .connect("mongodb://0.0.0.0:27017/twitterDb")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("listening at 8000");
});
