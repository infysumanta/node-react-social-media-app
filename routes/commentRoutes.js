const express = require("express");
const {
  createComments,
  getCommentsByPost,
  deleteComment,
} = require("../controllers/commentController");

const { verifyAuth } = require("../middleware/auth");

const router = express.Router();

router.use(verifyAuth);

router.route("/create").post(createComments);
router.route("/delete").delete(deleteComment);
router.route("/comments-by-post/:post_id").get(getCommentsByPost);

module.exports = router;
