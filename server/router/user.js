// creating user router

import express from "express";
import User from "../model/user.js";
import passport from "passport";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  let { username, email, password } = req.body;
  const user = new User({ username: username, email: email });
  const registerdUser = await User.register(user, password);

  res.status(200).json({ user: registerdUser });
});

//create login route and keep user logged in
userRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.status(200).json({
      user: req.user,
    });
  },
);

export default userRouter;
