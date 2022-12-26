import React from "react";
import TimeAgo from "react-timeago";
import { MdDelete } from "react-icons/md";
import { deleteComments } from "../../../../api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const CommentItem = ({ isChild, comment, refreshData }) => {
  const handleCommentClick = async () => {
    let data = {
      comment_id: comment._id,
    };
    const result = await deleteComments(data);
    if (result.success) {
      toast.success(result.response?.data?.message);
      refreshData();
    }
  };
  return (
    <article
      className={`p-2 mb-2 text-base rounded-lg border-b-2 border-l-2 ${
        isChild && "ml-10"
      }`}
    >
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center ">
          <Link
            className="inline-flex items-center mr-3 text-sm text-gray-900 "
            to={`/user/@${comment.commentBy.username}`}
          >
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />

            {comment.commentBy.name}
          </Link>
          <p className="text-sm text-gray-600">
            <Link to={`/user/@${comment.commentBy.username}`}>
              (@{comment.commentBy.username})
            </Link>{" "}
            - <TimeAgo date={comment.createdAt} />
          </p>
        </div>
        <div>
          <MdDelete
            className="text-gray-700 italic cursor-pointer"
            onClick={handleCommentClick}
          />
        </div>
      </footer>
      <p className="text-gray-800 italic ml-8 pl-2">{comment.description}</p>
    </article>
  );
};

export default CommentItem;
