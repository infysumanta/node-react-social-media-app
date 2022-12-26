import React from "react";
import { useState } from "react";

const CommentInput = () => {
  const [description, setDescription] = useState("");

  const handleSubmitComments = (e) => {
    e.preventDefault();
    alert(description);
    setDescription("");
  };

  return (
    <form className="mb-6" onSubmit={handleSubmitComments}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pink-700 rounded-lg focus:ring-4 focus:ring-pink-200  hover:bg-pink-800"
        >
          Post comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
