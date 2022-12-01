const router = require("express").Router();
const { onlyAdminUsers } = require("../helpers/onlyAdminUsers");
const { onlyLoggedUsers } = require("../helpers/onlyLoggedUsers");
const Category = require("../models/categories");
const Product = require("../models/products");

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    if (!products)
      return res
        .status(500)
        .send({ err: "Something went wrong at get all products" });

    res.status(200).send({ products });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// get products by category
router.get("/categories/:name", async (req, res) => {
  try {
    const cat_name = req.params.name;

    if (!cat_name)
      return res
        .status(500)
        .send({ err: "Something went wrong at get products by category" });

    const products = await Category.findOne({})
      .where({ name: cat_name })
      .populate("products");

    res.send({ products: products.products });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// get a single product by id
router.get("/product/:id", async (req, res) => {
  try {
    const product_id = req.params.id;

    if (!product_id)
      return res.status(500).send({ err: "No product id has been provided !" });

    const product = await Product.findOne({}).where({ _id: product_id });

    if (!product)
      return res.status(500).send({ err: "No product has been found !" });

    res.send({ product });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
