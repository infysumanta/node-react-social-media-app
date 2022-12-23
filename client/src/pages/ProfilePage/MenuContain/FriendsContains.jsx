import React from "react";

const FriendsContains = () => {
  return (
    <div className="w-full bg-white h-auto mt-2 shadow-lg rounded-lg border py-2 px-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold">Friends</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-5">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};

const Friend = () => {
  return (
    <div className="flex items-center justify-between border shadow rounded p-2">
      <div className="bg-blue-200 text-xl mr-2 border border-blue-900 p-1 font-bold">
        FN
      </div>
      <div className="flex-grow text-lg ">Friend Name</div>
      <button className="p-1 rounded cursor-pointer bg-blue-300 ml-3 text-sm">
        View
      </button>
      <button className="p-1 rounded cursor-pointer bg-blue-300 ml-3 text-sm">
        Chat
      </button>
    </div>
  );
};

export default FriendsContains;
