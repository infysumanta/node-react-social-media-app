const express = require("express");
const {
  createPost,
  deletePost,
  getUserPost,
  getFeedPost,
} = require("../controllers/postController");
const { verifyAuth } = require("../middleware/auth");

const router = express.Router();

router.route("/create").post(verifyAuth, createPost);
router.route("/delete").delete(verifyAuth, deletePost);

router.route("/get-user-post/:userId").get(verifyAuth, getUserPost);
router.route("/get-feed-post").get(verifyAuth, getFeedPost);

module.exports = router;
