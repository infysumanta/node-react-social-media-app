import React from "react";

const CommentItem = ({ isChild }) => {
  return (
    <article
      className={`p-2 mb-2 text-base rounded-lg border-b-2 border-l-2 ${
        isChild && "ml-10"
      }`}
    >
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center ">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            Michael Gough
          </p>
          <p className="text-sm text-gray-600">Feb. 8, 2022</p>
        </div>
      </footer>
      <p className="text-gray-500 ml-8 pl-2">
        Very straight-to-point article. Really worth time reading. Thank you!
        But tools are just the instruments for the UX designers. The knowledge
        of the design tools are as important as the creation of the design
        strategy.
      </p>
    </article>
  );
};

export default CommentItem;
