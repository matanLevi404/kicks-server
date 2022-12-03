const { onlyLoggedUsers } = require("../helpers/onlyLoggedUsers");
const Product = require("../models/products");
const Wish = require("../models/wishs");

const router = require("express").Router();

// get wish list
router.get("/", onlyLoggedUsers, async (req, res) => {
  try {
    const wishList = await Wish.findOne()
      .where({ user_id: req.user_id })
      .populate("products");

    if (!wishList)
      return res.status(500).send({ err: "Wish list wasnt found !" });

    res.send({ wishList: wishList.products });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// add to wish list
router.post("/add", onlyLoggedUsers, async (req, res) => {
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

    let wishList = await Wish.findOne().where({ user_id: req.user_id });

    wishList.products.push(productId);

    await wishList.save();

    wishList = await Wish.findOne()
      .where({ user_id: req.user_id })
      .populate("products");

    res.send({
      msg: "Product added to wish list !",
      wishList: wishList.products,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// remove from wish list
router.post("/remove", onlyLoggedUsers, async (req, res) => {
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

    let wishList = await Wish.findOne().where({ user_id: req.user_id });

    wishList.products = wishList.products.filter((p) => p._id != productId);

    await wishList.save();

    wishList = await Wish.findOne()
      .where({ user_id: req.user_id })
      .populate("products");

    res.send({
      msg: "Product removed from wish list !",
      wishList: wishList.products,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
