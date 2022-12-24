import React, { useEffect } from "react";
import { useState } from "react";
import { getUserPost } from "../../../api";
import { useSelector } from "react-redux";
import PostItem from "./Post/PostItem";
import CreatePost from "./Post/CreatePost";
import EmptyPost from "./Post/EmptyPost";
const PostsContain = ({ user }) => {
  const authUser = useSelector((state) => state.auth.user);
  const [posts, setPosts] = useState([]);

  const fetchUserPosts = async (userId) => {
    if (userId) {
      const result = await getUserPost(userId);
      if (result.success) {
        setPosts(result.response?.data?.posts);
      }
    }
  };

  useEffect(() => {
    fetchUserPosts(user._id);
  }, [user]);

  return (
    <>
      {authUser._id === user._id && (
        <CreatePost
          refreshData={() => {
            fetchUserPosts(user._id);
          }}
        />
      )}

      {posts && posts.length > 0 ? (
        <>
          <div className="w-full bg-white h-auto mt-2 shadow-sm rounded-lg border py-2 px-5">
            <div className="flex items-center justify-between ">
              <h1 className="text-2xl font-bold">Posts</h1>
            </div>
          </div>
          {/* Post Container  */}
          {posts &&
            posts.map((post, index) => (
              <PostItem
                key={post._id}
                post={post}
                authUser={authUser}
                refreshData={() => {
                  fetchUserPosts(user._id);
                }}
              />
            ))}
        </>
      ) : (
        <EmptyPost />
      )}
    </>
  );
};

export default PostsContain;
