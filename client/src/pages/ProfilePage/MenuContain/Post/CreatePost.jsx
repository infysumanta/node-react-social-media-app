import React, { useState } from "react";
import { createPost } from "../../../../api";

const CreatePost = ({ refreshData }) => {
  const [description, setDescription] = useState("");
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    await createPost({ description });
    setDescription("");
    refreshData();
  };
  return (
    <div className="w-full bg-white h-auto mt-2 shadow-sm rounded-lg border py-2 px-5">
      <h1 className="text-xl font-bold my-3">Create Post</h1>
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="w-full border rounded-xl p-3 transition ease-in-out focus:bg-white focus:border-pink-600 focus:outline-none"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What's on your Mind?"
        ></textarea>
        <div className="text-right mt-2">
          <button
            className="px-4 py-2 bg-pink-600 rounded-lg text-white"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
