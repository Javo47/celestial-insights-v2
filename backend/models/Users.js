const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  sign: String,
  lNumber: String,
  gender: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
