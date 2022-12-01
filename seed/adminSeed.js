const mongoose = require("mongoose");
const User = require("../models/users");

const bcrypt = require("bcrypt");

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected :)");
});

const admin = [
  new User({
    isAdmin: true,
    firstname: "Matan",
    lastname: "Levi",
    email: "Admin@admin.co.il",
    telephone: "000000000",
    password: process.env.ADMIN_PASSWORD,
  }),
];

admin.map(async (admin) => {
  admin.password = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  await admin.save((err, result) => {
    if (result) console.log("admin success :)");
    else console.log(err.messege);
  });
});
