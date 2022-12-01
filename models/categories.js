const mongoose = require("mongoose");

const categoryScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Category = new mongoose.model("Category", categoryScheme);
module.exports = Category;
