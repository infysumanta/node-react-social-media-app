const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    username: {
      type: String,
      required: [true, "Username is Required"],
      unique: [true, "Username is Unique"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: [true, "Email is Unique"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is Required"],
    },
    dob: {
      type: Date,
      required: [true, "Date of Birth is Required"],
    },
    userType: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
    friends: {
      type: Array,
      default: [],
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
