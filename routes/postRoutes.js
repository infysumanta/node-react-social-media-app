const express = require("express");
const {
  createPost,
  deletePost,
  getUserPost,
  getFeedPost,
  getSinglePost,
  likePost,
  dislikePost,
} = require("../controllers/postController");
const { verifyAuth } = require("../middleware/auth");

const router = express.Router();

router.use(verifyAuth);
router.route("/create").post(createPost);
router.route("/delete").delete(deletePost);

router.route("/get-user-post/:userId").get(getUserPost);
router.route("/get-feed-post").get(getFeedPost);
router.route("/get-single-post/:postId").get(getSinglePost);

router.route("/post-like").post(likePost);
router.route("/post-dislike").post(dislikePost);

module.exports = router;
