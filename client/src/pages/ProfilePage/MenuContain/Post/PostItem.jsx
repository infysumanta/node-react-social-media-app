import TimeAgo from "react-timeago";
import { MdModeEditOutline, MdDelete, MdShare } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";
import { deletePost, dislikePost, likePost } from "../../../../api";
import { Link, useNavigate } from "react-router-dom";
const PostItem = ({ post, authUser, refreshData }) => {
  const navigate = useNavigate();

  const handleLike = async () => {
    let body = {
      postId: post._id,
      likeBy: authUser._id,
    };
    const result = await likePost(body);
    if (result.success) {
      toast.success("Liked");
      refreshData();
    }
  };
  const handleDislike = async () => {
    let body = {
      postId: post._id,
      likeBy: authUser._id,
    };
    const result = await dislikePost(body);
    if (result.success) {
      toast.success("Disliked");
      refreshData();
    }
  };

  /* This is a function that is called when the delete button is clicked. It is used to delete the post. */
  const deletePostButtonHandler = async (postId) => {
    const postDelete = await deletePost({ postId: postId });
    if (postDelete.success) {
      refreshData();
    }
  };

  const heartIcon = (postLikes, user) => {
    if (postLikes.likes.some((obj) => obj.likeBy === user._id)) {
      return (
        <AiFillHeart
          className="text-3xl cursor-pointer"
          onClick={handleDislike}
        />
      );
    } else {
      return (
        <AiOutlineHeart
          className="text-3xl cursor-pointer"
          onClick={handleLike}
        />
      );
    }
  };

  return (
    <div className="w-full bg-white h-auto mt-2 shadow-sm border rounded-lg">
      <div className="flex items-center justify-between m-3">
        <Link
          className="flex items-center"
          to={`/user/@${post.postBy.username}`}
        >
          <img
            alt="sks"
            className="h-8 w-8 rounded-full"
            src="https://picsum.photos/id/1027/150/150"
          />
          <div className="ml-3 ">
            <span className="text-lg font-semibold antialiased block leading-tight">
              {post.postBy.name}
            </span>
            <span className="text-gray-600 text-sm block">
              @{post.postBy.username} - <TimeAgo date={post.createdAt} />
            </span>
          </div>
        </Link>
        {post.postBy._id === authUser._id && (
          <div className="flex">
            <span className="hidden">
              <MdModeEditOutline className="text-2xl ml-2 text-blue-600 cursor-pointer" />
            </span>
            <span>
              <MdDelete
                className="text-2xl ml-2 text-red-600 cursor-pointer"
                onClick={() => deletePostButtonHandler(post._id)}
              />
            </span>
          </div>
        )}
      </div>
      <hr />
      <div className="bg-gray-50 rounded min-h-[1rem] m-3 p-4 border text-2xl font-semibold">
        {post.description}
      </div>
      <hr />
      <div className="flex items-center justify-between mx-4 mt-3 mb-2">
        <div className="w-full flex items-center justify-center font-semibold border-r text-red-600">
          {heartIcon(post, authUser)}
          <span className="ml-3">{post.likes && post.likes.length} Likes</span>
        </div>
        <div className="w-full flex items-center justify-center  font-semibold text-orange-800">
          <AiOutlineComment
            className="text-3xl cursor-pointer"
            onClick={() => {
              navigate(`/posts/${post._id}?from=comment-click`);
            }}
          />
        </div>
        <div className="w-full flex items-center justify-center  font-semibold border-l text-purple-600">
          <MdShare
            className="text-3xl cursor-pointer"
            onClick={() => {
              const url = `${window.location.origin}/posts/${post._id}?from=copy-share`;
              copy(url);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
