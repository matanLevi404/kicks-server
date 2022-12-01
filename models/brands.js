const mongoose = require("mongoose");

const brandScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Product",
  },
});

const Brand = mongoose.model("Brand", brandScheme);
module.exports = Brand;
