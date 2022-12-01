// imports
require("dotenv").config({ path: __dirname + "/config/.env" });
const exp = require("express");
const cors = require("cors");
const Product = require("./models/products");
const Category = require("./models/categories");
const { createInvoice } = require("./invoice/createInvoice");
require("dotenv").config();

// inits
const app = exp();
const corsOptions = {
  origin: process.env.CLIENT_ADDRESS,
  credentials: true,
};
require("./db/mongoose");

// middlewares
app.use(exp.json());
app.use(cors(corsOptions));
app.use(exp.static("orders"));

// listen
app.use("/", require("./routes/auth"));
app.use("/home", require("./routes/home"));
app.use("/cart", require("./routes/cart"));
app.use("/checkout", require("./routes/checkout"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is up and running on port: " + port);
});
