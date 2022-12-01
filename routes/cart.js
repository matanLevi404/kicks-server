const { onlyLoggedUsers } = require("../helpers/onlyLoggedUsers");
const Cart = require("../models/carts");
const Product = require("../models/products");

const router = require("express").Router();

// get cart
router.get("/", onlyLoggedUsers, async (req, res) => {
  try {
    const cart = await Cart.findOne()
      .where({ user_id: req.user_id })
      .populate("products.id");

    if (!cart)
      return res
        .status(500)
        .send({ err: "Not found. No such cart has been found !" });

    let subTotal = 0;

    cart.products.map((p) => (subTotal += p.id.price * p.qt));

    res.send({ cart: cart.products, subTotal, total: subTotal });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// push to cart
router.post("/push/:id", onlyLoggedUsers, async (req, res) => {
  try {
    const ObjectId = require("mongoose").Types.ObjectId;
    const cart = await Cart.findOne().where({ user_id: req.user_id });
    const product_id = req.params.id;
    const { size } = req.body;

    if (!size)
      return res.status(500).send({ err: "Please choose your size !" });

    if (!product_id)
      return res
        .status(500)
        .send({ err: "Missing fields. No product id has been given !" });

    if (!ObjectId.isValid(product_id))
      return res
        .status(500)
        .send({ err: "Not valid. Product id is not valid !" });

    const product = await Product.find().where({ _id: product_id });

    if (!product)
      return res
        .status(500)
        .send({ err: "Not found. No product with that id has been found !" });

    if (!cart)
      return res
        .status(500)
        .send({ err: "Not found. No such cart has been found !" });

    const exists = cart.products.find(
      (obj) => obj.id == product_id && obj.size == size
    );

    if (exists) exists.qt += 1;
    else cart.products.push({ id: product_id, qt: 1, size });

    await cart.save();

    res.send({ msg: "Product pushed successfully !" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// pull from cart
router.post("/pull/:id", onlyLoggedUsers, async (req, res) => {
  try {
    const cart = await Cart.findOne().where({ user_id: req.user_id });
    const product_id = req.params.id;
    const { size } = req.body;

    if (!product_id)
      return res
        .status(500)
        .send({ err: "Missing fields. No product id has been given !" });

    if (!cart)
      return res
        .status(500)
        .send({ err: "Not found. No such cart has been found !" });

    let products = cart.products;

    const item = products.find(
      (obj) => obj.id == product_id && obj.size == size
    );

    if (item.qt > 1) {
      products = products.map((obj) => {
        if (obj.id == product_id && obj.size == size) obj.qt -= 1;
      });
    } else {
      products = products.filter(
        (obj) => obj.id != product_id || obj.size != size
      );
      cart.products = products;
    }

    await cart.save();

    res.send({ msg: "Product pulled successfully !" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// empty the cart
router.delete("/", onlyLoggedUsers, async (req, res) => {
  try {
    const cart = await Cart.findOne().where({ user_id: req.user_id });

    if (!cart)
      return res
        .status(500)
        .send({ err: "Not found. No such cart has been found !" });

    cart.products.splice(0, cart.products.length);

    await cart.save();

    res.send({ msg: "Your cart is empty !" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
