const jwt = require("jsonwebtoken");

const onlyLoggedUsers = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res
      .status(401)
      .send({ err: "Forbbiden. Please Login or Register !" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res
        .status(403)
        .send({ err: "Expired. We recognize you. Please Login again !" });

    req.user_id = user.user_id;
    next();
  });
};

module.exports = { onlyLoggedUsers };
