const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  isAdmin: {
    type: Boolean,
    default: false,
  },
  firstname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 225,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 225,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 225,
  },
  telephone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscribe: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userScheme);
module.exports = User;
