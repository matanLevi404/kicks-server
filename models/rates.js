const mongoose = require("mongoose");

const rateScheme = new mongoose.Schema({
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

const Rate = new mongoose.model("Rate", rateScheme);
module.exports = Rate;
