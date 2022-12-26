import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSinglePost, likePost, dislikePost } from "../../../../api";
import { MdShare } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";
import TimeAgo from "react-timeago";
import { useSelector } from "react-redux";
import Layout from "../../../../components/Layouts/Layout";
import EmptyData from "../Post/EmptyData";
import CommentContain from "./CommentContain";

const PostPage = () => {
  const [post, setPost] = useState({});

  const authUser = useSelector((state) => state.auth.user);
  const { post_id } = useParams();

  const fetchPost = async () => {
    const result = await getSinglePost(post_id);
    setPost(result.response?.data?.post);
  };

  const handleLike = async () => {
    toast.success("Liked");
    let body = {
      postId: post_id,
      likeBy: authUser._id,
    };
    const result = await likePost(body);
    if (result.success) {
      fetchPost();
    }
  };
  const handleDislike = async () => {
    toast.success("Disliked");
    let body = {
      postId: post_id,
      likeBy: authUser._id,
    };
    const result = await dislikePost(body);
    if (result.success) {
      fetchPost();
    }
  };

  const heartIcon = (postLikes, user) => {
    if (
      postLikes.likes &&
      postLikes.likes.some((obj) => obj.likeBy === user._id)
    ) {
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

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <Layout>
      <div className="w-full lg:w-1/2 m-auto">
        {post ? (
          <>
            <div className="post-header">
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
                        {post.postBy && post.postBy.name}
                      </span>
                      <span className="text-gray-600 text-sm block">
                        @{post.postBy && post.postBy.username} -{" "}
                        <TimeAgo date={post.createdAt} />
                      </span>
                    </div>
                  </Link>
                </div>
                <hr />
                <div className="bg-gray-50 rounded min-h-[1rem] m-3 p-4 border text-2xl font-semibold">
                  {post.description}
                </div>
                <hr />
                <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                  <div className="w-full flex items-center justify-center font-semibold border-r text-red-600">
                    {heartIcon(post, authUser)}
                    <span className="ml-3">
                      {post.likes && post.likes.length} Likes
                    </span>
                  </div>
                  {/* <div className="w-full flex items-center justify-center  font-semibold text-orange-800">
                    <AiOutlineComment className="text-3xl cursor-pointer" />
                  </div> */}
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
            </div>
            <div className="post-comments">
              <CommentContain post_id={post_id} />
            </div>
          </>
        ) : (
          <EmptyData message="No post, wrong post Url" />
        )}
      </div>
    </Layout>
  );
};

export default PostPage;
