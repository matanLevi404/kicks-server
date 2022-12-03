const User = require("../models/users");

const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { onlyLoggedUsers } = require("../helpers/onlyLoggedUsers");
const Cart = require("../models/carts");
const Wish = require("../models/wishs");
const Rate = require("../models/rates");

// register
router.post("/register", async (req, res) => {
  try {
    const {
      isAdmin,
      firstname,
      lastname,
      email,
      telephone,
      password,
      subscribe,
    } = req.body;

    if (!firstname || !lastname || !email || !telephone || !password)
      return res
        .status(500)
        .send({ err: "Missing fields. Please check all required inputs !" });

    if (await User.exists().where("email").equals(email))
      return res
        .status(500)
        .send({ err: "Change email. This email is allready taken !" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const new_user = new User({ ...req.body, password: hashedPassword });

    await new_user.save();

    const cart = new Cart({ user_id: new_user._id });

    const wishList = new Wish({ user_id: new_user._id });

    const rate = new Rate({ user_id: new_user._id });

    await cart.save();
    await wishList.save();
    await rate.save();

    res
      .status(200)
      .send({ msg: "Welcome to KICK'S. User registered succsesfully !" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(500)
        .send({ err: "Missing fields. Password or Email are missing !" });

    if (!(await User.exists().where("email").equals(email)))
      return res
        .status(500)
        .send({ err: "Not found. This email isnt registered !" });

    const user = await User.findOne().where("email").equals(email);

    if (!(await bcrypt.compare(password, user.password)))
      return res
        .status(500)
        .send({ err: "No Match. Password or Email are incorrect !" });

    let cart = await Cart.findOne({})
      .where({ user_id: user._id })
      .populate("products.id");

    let accessToken = "";

    if (!user.isAdmin) {
      accessToken = jwt.sign(
        { user_id: user._id, firstname: user.firstname },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "20m",
        }
      );
    } else {
      accessToken = jwt.sign(
        { user_id: user._id },
        process.env.ADMIN_TOKEN_SECRET
      );
    }

    res.status(200).send({
      isAdmin: user.isAdmin,
      firstname: user.firstname,
      msg: `Hello ${user.firstname}. Have fun Shopping at KICK'S !`,
      accessToken,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// logout
router.delete("/logout", onlyLoggedUsers, async (req, res) => {
  try {
    res.send({ msg: "chekc" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
