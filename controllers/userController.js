const User = require("./../models/user.schema");
const FriendRequest = require("./../models/friendRequest.schema");

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

    const from = req.user._id;
    const to = user._id;

    const isRequestSend = await FriendRequest.exists({
      to: to,
      from: from,
    });

    const isRequestReceived = await FriendRequest.exists({
      to: from,
      from: to,
    });

    return res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        isFriend: user.friends.includes(from),
        requestSend: isRequestSend ? true : false,
        requestReceived: isRequestReceived ? true : false,
      },

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

exports.sendFriendRequest = async (req, res) => {
  try {
    const from = req.user._id;
    const to = req.body.userId;

    const isRequestExist = await FriendRequest.findOne({
      $or: [
        {
          from: from,
          to: to,
        },
        {
          from: to,
          to: from,
        },
      ],
    });

    if (isRequestExist) {
      return res.status(403).json({
        success: false,
        message: "Request Already Exist!",
      });
    }

    const request = new FriendRequest({
      from,
      to,
    });

    await request.save();

    return res.status(203).json({
      success: true,
      message: "Request Send",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.cancelFriendRequest = async (req, res) => {
  try {
    const from = req.user._id;
    const to = req.body.userId;

    const isRequestExist = await FriendRequest.findOne({
      $or: [
        {
          from: from,
          to: to,
        },
        {
          from: to,
          to: from,
        },
      ],
    });

    if (!isRequestExist) {
      return res.status(403).json({
        success: false,
        message: "You already canceled the friend request.",
      });
    }

    await isRequestExist.delete();

    return res.status(203).json({
      success: true,
      message: "Request Cancelled",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
exports.confirmFriendRequest = async (req, res) => {
  try {
    const from = req.user._id;
    const to = req.body.userId;

    const isRequestExist = await FriendRequest.findOne({
      $or: [
        {
          from: from,
          to: to,
        },
        {
          from: to,
          to: from,
        },
      ],
    });

    if (!isRequestExist) {
      return res.status(403).json({
        success: false,
        message: "There was no request for be Friends.",
      });
    }

    const fromUser = await User.findById(from);
    const toUser = await User.findById(to);
    fromUser.friends.push(to);
    toUser.friends.push(from);
    await fromUser.save();
    await toUser.save();
    await isRequestExist.delete();
    return res.status(203).json({
      success: true,
      fromUser,
      toUser,
      message: "Congratulations! You are now friend.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
