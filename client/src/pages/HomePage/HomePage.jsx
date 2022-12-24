import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFeedPost } from "../../api";
import Layout from "../../components/Layouts/Layout";
import CreatePost from "../ProfilePage/MenuContain/Post/CreatePost";
import EmptyPost from "../ProfilePage/MenuContain/Post/EmptyPost";
import PostItem from "../ProfilePage/MenuContain/Post/PostItem";

const HomePage = () => {
  const authUser = useSelector((state) => state.auth.user);
  const [posts, setPosts] = useState([]);

  const fetchFeedPosts = async () => {
    const result = await getFeedPost();
    if (result.success) {
      setPosts(result.response?.data?.posts);
    }
  };

  useEffect(() => {
    fetchFeedPosts();
  }, []);

  return (
    <Layout>
      <div className="w-full lg:w-1/2 m-auto">
        <CreatePost refreshData={() => fetchFeedPosts()} />

        {posts && posts.length > 0 ? (
          <div className="w-full">
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
                  refreshData={() => fetchFeedPosts()}
                />
              ))}
          </div>
        ) : (
          <EmptyPost />
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
