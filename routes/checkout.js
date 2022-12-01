const { onlyLoggedUsers } = require("../helpers/onlyLoggedUsers");
const { createInvoice } = require("../invoice/createInvoice");
const Cart = require("../models/carts");
const Order = require("../models/orders");
const User = require("../models/users");

const path = require("path");

const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

router.get("/checkout-session", onlyLoggedUsers, async (req, res) => {
  try {
    const cart = await Cart.findOne()
      .where({ user_id: req.user_id })
      .populate("products.id");

    const user = await User.findOne().where({ _id: req.user_id });

    const line_items = cart.products.map((item) => {
      return {
        price_data: {
          currency: "ils",
          product_data: { name: item.id.name, images: [item.id.images[0]] },
          unit_amount: Math.round(item.id.price * 100),
        },
        quantity: item.qt,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: { allowed_countries: ["IL", "US"] },
      customer_email: user.email,
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_ADDRESS}/payment-success`,
      cancel_url: `${process.env.CLIENT_ADDRESS}/payment-failed`,
    });

    res.send({ url: session.url, id: session.id });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/webhook", async (req, res) => {
  try {
    const email = req.body.data.object.customer_email;
    const user = await User.findOne().where({ email: email });

    if (!user)
      return res
        .status(500)
        .send({ err: "No user with that email has found !" });

    const cart = await Cart.findOne().where({ user_id: user._id });

    if (!cart)
      return res.status(500).send({ err: "This user has no active cart" });

    if (req.body.data.object.payment_status == "paid") {
      cart.products = [];
      await cart.save();
      res.send({ msg: "Payment was successfull. Cart is empty !" });
    } else {
      res.send({ msg: "Payment failed. Something wen t wrong !" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
