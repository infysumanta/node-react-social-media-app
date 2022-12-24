import React from "react";

const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className="w-full bg-pink-700 rounded text-2xl p-2 mt-5 text-white shadow-md hover:bg-pink-700 hover:shadow-sm focus:bg-pink-700 focus:shadow-sm focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-sm transition duration-150 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
