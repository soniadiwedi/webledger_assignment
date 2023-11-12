const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false,
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      unique: false,
      required: true
    },
    favourite:{
      type:Object
    }
  },
  {
    timestamps: true,
  }
);

module.exports.userModel = mongoose.model("User", userSchema);