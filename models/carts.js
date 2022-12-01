const mongoose = require("mongoose");

const cartScheme = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  products: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qt: { type: Number },
      size: { type: Number },
    },
  ],
});

const Cart = new mongoose.model("Cart", cartScheme);
module.exports = Cart;
