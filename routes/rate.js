const { onlyLoggedUsers } = require("../helpers/onlyLoggedUsers");
const Product = require("../models/products");
const Rate = require("../models/rates");
const Wish = require("../models/wishs");

const router = require("express").Router();

// get rating list
router.get("/", onlyLoggedUsers, async (req, res) => {
  try {
    const rate = await Rate.findOne().where({ user_id: req.user_id });

    if (!rate)
      return res.status(500).send({ err: "Rating list wasnt found !" });

    res.send({ products: rate.products });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// rate toggle a product
router.post("/", onlyLoggedUsers, async (req, res) => {
  try {
    const { productId } = req.body;

    const ObjectId = require("mongoose").Types.ObjectId;

    if (!productId)
      return res.status(500).send({ err: "You have to provide product id !" });

    if (!ObjectId.isValid(productId))
      return res
        .status(500)
        .send({ err: "Not valid. Product id is not valid !" });

    const product = await Product.findOne().where({ _id: productId });

    if (!product)
      return res.status(500).send({ err: "Product was not found !" });

    let rate = await Rate.findOne().where({ user_id: req.user_id });

    if (!rate)
      return res.status(500).send({ err: "Rated list was not found !" });

    if (rate.products.find((p) => p._id == productId)) {
      rate.products = rate.products.filter((p) => p._id != productId);
      product.rating -= 1;
      await product.save();
    } else {
      rate.products.push(productId);
      if (product.rating < 5) product.rating += 1;
      await product.save();
    }

    await rate.save();

    rate = await Rate.findOne().where({ user_id: req.user_id });

    res.send({ msg: "Rating updated !", products: rate.products });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
