const Comment = require("./../models/comment.schema");
const Post = require("./../models/posts.schema");

exports.createComments = async (req, res) => {
  try {
    const { description, post_id } = req.body;

    const comment = new Comment();
    comment.description = description;
    comment.postId = post_id;
    comment.commentBy = req.user._id;
    await comment.save();

    const post = await Post.findById(post_id);
    post.comments.push(comment);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Comment saved successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrongng went wrong!",
    });
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const postId = req.params.post_id;

    const comments = await Comment.find({ postId: postId })
      .populate("commentBy", "name email username")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      comments,
      message: "Comments Fetched Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { comment_id } = req.body;

    const comment = await Comment.findById(comment_id);
    await comment.delete();

    const post = await Post.findById(comment.postId);
    post.comments.pull(comment_id);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Comments Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
