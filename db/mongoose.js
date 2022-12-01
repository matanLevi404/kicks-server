const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) console.log(err.message);
  else console.log("Connected to mongoDB :)");
});
