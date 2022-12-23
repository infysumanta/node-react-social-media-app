const express = require("express");
const {
  getUserDetails,
  getUserDetailsByUsername,
  getUserListBySearch,
} = require("../controllers/userController");
const { verifyAuth } = require("../middleware/auth");
const router = express.Router();

// router.use(verifyAuth);
router.route("/get-user-details").post(getUserDetails);
router.route("/get-user-details/:username").get(getUserDetailsByUsername);
router.route("/get-user-list-search").get(getUserListBySearch);

module.exports = router;
