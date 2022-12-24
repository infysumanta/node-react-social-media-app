const express = require("express");
const {
  getUserDetails,
  getUserDetailsByUsername,
  getUserListBySearch,
  sendFriendRequest,
  cancelFriendRequest,
  confirmFriendRequest,
  getFriendsList,
  getAboutDetails,
} = require("../controllers/userController");
const { verifyAuth } = require("../middleware/auth");
const router = express.Router();

router.use(verifyAuth);

router.route("/get-user-details").post(getUserDetails);
router.route("/get-user-details/:username").get(getUserDetailsByUsername);
router.route("/get-user-list-search").get(getUserListBySearch);

router.route("/get-user-friends-list/:user_id").get(getFriendsList);
router.route("/get-about-details").get(getAboutDetails);

router.route("/send-friend-request").post(sendFriendRequest);
router.route("/cancel-friend-request").post(cancelFriendRequest);
router.route("/confirm-friend-request").post(confirmFriendRequest);

module.exports = router;
