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
    const user = await User.findOne({ username }).select("-password");
    return res.status(200).json({
      success: true,
      user,
      message: "Found User list",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.getUserListBySearch = async (req, res) => {
  try {
    const search = req.query.search;
    const users = await User.find({
      $or: [
        {
          name: { $regex: search, $options: "i" },
        },
        {
          username: { $regex: search, $options: "i" },
        },
      ],
    })
      .select("name username")
      .limit(5);
    return res.status(200).json({
      success: true,
      users,
      message: "Fetch Data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
