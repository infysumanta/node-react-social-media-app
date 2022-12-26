import React from "react";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const CommentContain = () => {
  return (
    <section className="bg-white p-4 mt-4 rounded-lg shadow-md border">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-xl font-bold text-gray-900">
            Discussion (20)
          </h2>
        </div>
        <CommentInput />
        <hr className="my-4 border-t border-gray-400" />
        <CommentItem />
        <CommentItem />
        <CommentItem isChild="true" />
        <CommentItem isChild="true" />
        <CommentItem />
        <CommentItem isChild="true" />
      </div>
    </section>
  );
};

export default CommentContain;
