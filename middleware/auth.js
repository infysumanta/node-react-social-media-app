const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("./../models/user.schema");
const verifyAuth = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials!",
      });
    }
    if (token.includes("Bearer")) {
      token = token.slice(7);
    }
    const decode = await jwt.verify(token, config.JWT_SECRET);
    const userId = decode.id;
    const user = await User.findById(userId);
    user.password = undefined;
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials!",
    });
  }
};

module.exports = {
  verifyAuth,
};
