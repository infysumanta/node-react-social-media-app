import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUserFriendsList } from "../../../api";

import { useNavigate } from "react-router-dom";

const FriendsContains = ({ user }) => {
  const [friendsList, setFriendsList] = useState([]);
  const fetchFriendsList = async (userId) => {
    const friends = await getUserFriendsList(userId);
    setFriendsList(friends.response?.data?.friends);
  };
  useEffect(() => {
    fetchFriendsList(user._id);
  }, [user]);

  return (
    <div className="w-full bg-white h-auto mt-2 shadow-lg rounded-lg border py-2 px-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold">Friends</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-5">
        {friendsList &&
          friendsList.map((friend, index) => (
            <Friend friend={friend} key={friend._id} />
          ))}
      </div>
    </div>
  );
};

const Friend = ({ friend }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between border shadow rounded p-2">
      <div className="bg-blue-200 text-xl mr-2 border border-blue-900 p-1 font-bold">
        {friend.name && friend.name.slice(0, 1)}
      </div>
      <div className="flex-grow text-lg ">{friend.name}</div>
      <button
        className="p-1 rounded cursor-pointer bg-blue-300 ml-3 text-sm"
        onClick={() => navigate(`/user/@${friend.username}`)}
      >
        View
      </button>
      <button
        className="p-1 rounded cursor-pointer bg-blue-300 ml-3 text-sm"
        onClick={() => navigate(`/chats/${friend._id}`)}
      >
        Chat
      </button>
    </div>
  );
};

export default FriendsContains;
