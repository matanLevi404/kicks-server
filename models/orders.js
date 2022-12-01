const mongoose = require("mongoose");

const orderScheme = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  invoiceStr: {
    type: String,
  },
});

const Order = new mongoose.model("Order", orderScheme);
module.exports = Order;
