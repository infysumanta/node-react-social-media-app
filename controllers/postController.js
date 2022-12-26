const User = require("./../models/user.schema");
const Post = require("./../models/posts.schema");
const Like = require("./../models/like.schema");

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
      .populate("likes", "likeBy")
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
      .populate("likes", "likeBy")
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

exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("postBy", "name email username")
      .populate("likes", "likeBy");

    return res.status(200).json({
      success: true,
      post: post,
      message: "Feed Post Fetch ss",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { likeBy, postId } = req.body;

    const like = new Like();
    like.likeBy = likeBy;
    like.postId = postId;
    await like.save();

    const post = await Post.findById(postId);
    post.likes.push(like);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post Likes",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

exports.dislikePost = async (req, res) => {
  try {
    const { likeBy, postId } = req.body;

    const like = await Like.findOneAndDelete({
      likeBy: likeBy,
      postId: postId,
    });

    const post = await Post.findByIdAndUpdate(postId);
    post.likes.pull(like._id);
    await post.save();

    return res.status(200).json({
      success: true,
      post,
      message: "Post Likes",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
