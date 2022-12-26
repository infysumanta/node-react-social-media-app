import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCommentByPost } from "../../../../api";
import EmptyData from "../Post/EmptyData";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const CommentContain = ({ post_id }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const result = await getCommentByPost(post_id);
    if (result.success) {
      setComments(result.response?.data?.comments);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [post_id]);

  return (
    <section className="bg-white p-4 mt-4 rounded-lg shadow-sm border">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-xl font-bold text-gray-900">
            Discussion ({comments.length})
          </h2>
        </div>
        <CommentInput post_id={post_id} refreshData={fetchComments} />
        <hr className="my-4 border-t border-gray-400" />
        {comments.length > 0 ? (
          <>
            {comments.map((comment, index) => (
              <CommentItem
                comment={comment}
                key={comment._id}
                refreshData={fetchComments}
              />
            ))}
          </>
        ) : (
          <EmptyData message="No Comments Yet." />
        )}
      </div>
    </section>
  );
};

export default CommentContain;
