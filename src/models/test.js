const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      unique: true,
      trim: true, // trim in mongoose use to remove the white spaces from the strings
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

testSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return userObject;
};

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
