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
  updateUserDetails,
  getNotifications,
  readOneNotification,
  markedAllNotificationAsRead,
} = require("../controllers/userController");
const { verifyAuth } = require("../middleware/auth");
const router = express.Router();

router.use(verifyAuth);

router.route("/get-user-details").post(getUserDetails);
router.route("/get-user-details/:username").get(getUserDetailsByUsername);
router.route("/get-user-list-search").get(getUserListBySearch);
router.route("/get-user-notification-list").get(getNotifications);

router.route("/get-user-friends-list/:user_id").get(getFriendsList);
router.route("/get-about-details/:user_id").get(getAboutDetails);

router.route("/send-friend-request").post(sendFriendRequest);
router.route("/cancel-friend-request").post(cancelFriendRequest);
router.route("/confirm-friend-request").post(confirmFriendRequest);

router.route("/update-user-details").put(updateUserDetails);

router.route("/read-one-notification").post(readOneNotification);
router
  .route("/marked-all-notification-as-read")
  .post(markedAllNotificationAsRead);

module.exports = router;
