const User = require("./../models/user.schema");
const FriendRequest = require("./../models/friendRequest.schema");
const jwt = require("jsonwebtoken");
const config = require("../config");
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

exports.getFriendsList = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await User.findById(user_id).populate("friends");
    return res.status(200).json({
      success: true,
      friends: user.friends,
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

exports.getAboutDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "-password -friends -notifications"
    );
    return res.status(200).json({
      success: true,
      user: user,
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

exports.getNotifications = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).sort({ date: -1 });

    return res.status(203).json({
      notifications: user.notifications,
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

    const user = await User.findById(to);
    const notification = {
      title: "Friend Request",
      description: "Send you Friend Request",
    };

    user.notifications.push(notification);
    await user.save();

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

exports.updateUserDetails = async (req, res) => {
  try {
    const { name, email, username, dob, gender } = req.body;
    const user_id = req.user._id;

    const isUsernameExist = await User.findOne({
      username: username,
      _id: { $ne: user_id },
    });

    if (isUsernameExist) {
      return res.status(500).json({
        success: false,
        message: "Username already registered with us, please try other",
      });
    }

    const isEmailExist = await User.findOne({
      email: email,
      _id: { $ne: user_id },
    });
    if (isEmailExist) {
      return res.status(500).json({
        success: false,
        message: "Email already registered with us, please try other",
      });
    }

    const user = await User.findById(user_id).select("-password -friends");
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "30d",
    });

    if (name) user.name = name;
    if (email) user.email = email;
    if (gender) user.gender = gender;
    if (dob) user.dob = dob;
    if (username) user.username = username;
    await user.save();
    console.log(user);
    return res.status(203).json({
      success: true,
      user: { ...user._doc, token },
      isEmailExist,
      message: "User Details Updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.readOneNotification = async (req, res) => {
  try {
    const { notification_id } = req.body;
    const user = await User.findOne({
      _id: req.user._id,
    });

    const notifications = user.notifications;
    notifications.forEach((notification, index) => {
      if (notification._id.toString() === notification_id) {
        notifications[index].read = true;
      }
    });

    user.notifications = notifications;
    await user.save();

    return res.status(203).json({
      success: true,
      notifications,
      message: "Notification Updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
exports.markedAllNotificationAsRead = async (req, res) => {
  try {
    const { notification_id } = req.body;
    const user = await User.findOne({
      _id: req.user._id,
    });

    const notifications = user.notifications;
    notifications.forEach((notification, index) => {
      notifications[index].read = true;
    });

    user.notifications = notifications;
    await user.save();

    return res.status(203).json({
      success: true,
      notifications,
      message: "Marked all as Read",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
