const Category = require("../models/categories");
const Product = require("../models/products");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected :)");
});

const categoryArray = [
  new Category({ name: "Sports" }),
  new Category({ name: "Lifestyle" }),
  new Category({ name: "Jordan" }),
  new Category({ name: "Football" }),
];

categoryArray.map(async (cat) => {
  const array = await Product.find({ cat: cat.name }).distinct("_id");
  console.log(array);

  cat.products = array;

  await cat.save((err, result) => {
    if (result) console.log("cat success :)");
    else console.log(err.message);
  });
});
