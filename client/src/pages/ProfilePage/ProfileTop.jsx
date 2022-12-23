import React from "react";

const ProfileTop = () => {
  return (
    <div className="bg-purple-400 m-auto h-72 w-full rounded-t-lg  shadow-lg border">
      <div className="w-full bg-gray-100 flex items-center justify-between relative top-[25%] p-2 rounded-l-full shadow-lg">
        <div className="flex items-center">
          <div className="w-32 rounded-full h-32 bg-pink-700 shadow-xl text-5xl text-white font-bold flex items-center justify-center">
            SK
          </div>
          <div className="flex flex-col ml-5">
            <div className="text-3xl">Sumanta Kabiraj</div>
            <div>2 Friends</div>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <button className="text-white text-base shwdow px-4 py-2 rounded bg-green-600 m-2">
            Follow
          </button>
          <button className="text-white text-base shwdow px-4 py-2 rounded bg-blue-700 m-2">
            Add Friend
          </button>
          <button className="text-white text-base shwdow px-4 py-2 rounded bg-purple-700 m-2">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
