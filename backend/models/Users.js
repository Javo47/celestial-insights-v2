const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  birthDate: String,
  sign: String,
  lNumber: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
