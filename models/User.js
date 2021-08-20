const mongoose = require("mongoose");

//Mongoose Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
