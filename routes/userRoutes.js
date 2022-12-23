const express = require("express");
const { getUserDetails } = require("../controllers/userController");
const { verifyAuth } = require("../middleware/auth");
const router = express.Router();

router.route("/get-user-details").post(verifyAuth, getUserDetails);

module.exports = router;
