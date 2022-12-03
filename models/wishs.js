const mongoose = require("mongoose");

const wishScheme = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  products: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    default: [],
  },
});

const Wish = new mongoose.model("Wish", wishScheme);
module.exports = Wish;
