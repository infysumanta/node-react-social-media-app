import React from "react";

const PostsContain = () => {
  return (
    <>
      <div className="w-full bg-white h-auto mt-2 shadow-lg rounded-lg border py-2 px-5">
        <h1 className="text-xl font-bold my-3">Create Post</h1>
        <div>
          <textarea
            className="w-full border rounded-xl p-3 transition ease-in-out focus:bg-white focus:border-pink-600 focus:outline-none"
            placeholder="What's on your Mind?"
          ></textarea>
          <div className="text-right mt-2">
            <button className="px-4 py-2 bg-pink-600 rounded-lg text-white">
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-auto mt-2 shadow-lg rounded-lg border py-2 px-5">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-bold">Posts</h1>
        </div>
      </div>
      {/* Post Container  */}
      <div className="w-full bg-white h-auto mt-2 shadow-lg rounded-lg border py-2 px-5">
        Post Container
      </div>
    </>
  );
};

export default PostsContain;
