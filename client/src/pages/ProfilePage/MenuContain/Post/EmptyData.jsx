import React from "react";

const EmptyData = ({ message }) => {
  return (
    <div className="w-full bg-white h-auto mt-2 shadow-sm rounded-lg border py-5 px-5 italic text-center text-xl leading-10">
      {message}
    </div>
  );
};

export default EmptyData;
