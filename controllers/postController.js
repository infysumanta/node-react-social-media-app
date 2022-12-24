const User = require("./../models/user.schema");
const Post = require("./../models/posts.schema");

exports.createPost = async (req, res) => {
  try {
    const { description } = req.body;

    const post = new Post();
    post.description = description;
    post.postBy = req.user._id;
    await post.save();

    return res.status(200).json({
      success: true,
      message: "User Validated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrongng went wrong!",
    });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    await Post.findByIdAndDelete(postId);

    return res.status(200).json({
      success: true,
      postId,
      message: "Post Deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.getUserPost = async (req, res) => {
  try {
    const userId = req.params.userId;

    const posts = await Post.find({ postBy: userId })
      .populate("postBy", "name email username")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      posts,
      message: "User Post Fetch",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
exports.getFeedPost = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("postBy", "name email username")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      posts,
      message: "Feed Post Fetch",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
