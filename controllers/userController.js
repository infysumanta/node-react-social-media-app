const User = require("./../models/user.schema");
exports.getUserDetails = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: { user: req.user },
      message: "User Validated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Invalid Credentials!",
    });
  }
};

exports.getUserDetailsByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });
    return res.status(200).json({
      success: true,
      user,
      message: "Something went wrong!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
