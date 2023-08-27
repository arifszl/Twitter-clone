import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

export default User;
