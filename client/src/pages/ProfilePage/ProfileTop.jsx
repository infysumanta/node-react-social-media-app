import React from "react";
import { useSelector } from "react-redux";

const ProfileTop = ({ user }) => {
  const auth = useSelector((state) => state.auth.user);

  return (
    <div className="bg-purple-400 m-auto w-full rounded-t-lg  shadow-lg border p-3">
      <div className="w-full bg-gray-100 flex items-center justify-between top-[25%] p-2 rounded-l-full shadow-lg">
        <div className="flex items-center">
          <div className="w-32 rounded-full h-32 bg-pink-700 shadow-xl text-6xl text-white font-bold flex items-center justify-center">
            {user.name && user.name.slice(0, 1)}
          </div>
          <div className="flex flex-col ml-5">
            <div className="text-3xl">{user.name}</div>
            <div>{user.friends && user.friends.length} Friends | </div>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          {auth.username !== user.username && (
            <button className="text-white text-base shwdow px-4 py-2 rounded bg-blue-700 m-2">
              Add Friend
            </button>
          )}
          {auth.username === user.username && (
            <button className="text-white text-base shwdow px-4 py-2 rounded bg-purple-700 m-2">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
