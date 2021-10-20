const mongoose = require("mongoose");
const validator = require("validator");


const patientSchema = new mongoose.Schema(
  {
    owner_name: {
      type: String,
      required: true,
      trim: true, // trim in mongoose use to remove the white spaces from the strings
    },
    address: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
    },
    pet_name: {
        type: String,
        required: true
    },
    pet_age: {
        type: Number,
        required: true
    },
    pet_weight: {
        type: Number,
        required: true
    },
    pet_species: {
        type: String,
        required: true
    },
    pet_breed: {
        type: String,
        required: true
    },
    pet_color: {
        type: String
    },
    pet_gender: {
        type: String,
        required: true
    },
    pet_natured: {
        type: Boolean,
        required: true
    },
    pet_vaccination: {
        type: Array
    },
    comments: {
        type: String
    }

  },
  { timestamps: true }
);




const User = mongoose.model("Patient", patientSchema);

module.exports = User;
