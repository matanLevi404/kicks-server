const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bigDeal: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: () => Math.floor(Math.random() * 6),
  },
  des: {
    type: String,
    default: "Lorem ipsum Dolor",
  },
  images: {
    type: [String],
    required: true,
  },
});

const Product = new mongoose.model("Product", productScheme);
module.exports = Product;
