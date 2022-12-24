import React from "react";
import { useSelector } from "react-redux";
import {
  sendFriendRequest,
  cancelFriendRequest,
  confirmFriendRequest,
} from "../../api";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProfileTop = ({ user }) => {
  const [requested, setRequested] = useState(false);
  const auth = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const addFriendRequestButtonHandler = async () => {
    const request = await sendFriendRequest({ userId: user._id });
    if (request.success) {
      toast.success(request.response?.data?.message);
      setRequested(true);
    } else {
      toast.error(request.response?.response?.data.message);
    }
  };
  const confirmFriendButtonHandler = async () => {
    const confirm = await confirmFriendRequest({ userId: user._id });
    if (confirm.success) {
      toast.success(confirm.response?.data?.message);
      setRequested(false);
    } else {
      toast.error(confirm.response?.response?.data.message);
    }
  };
  const cancelFriendButtonHandler = async () => {
    const cancel = await cancelFriendRequest({ userId: user._id });
    if (cancel.success) {
      toast.success(cancel.response?.data?.message);
      setRequested(false);
    } else {
      toast.error(cancel.response?.response?.data.message);
    }
  };

  useEffect(() => {
    if (user.requestSend) setRequested(true);
  }, [user]);

  return (
    <div className="bg-purple-400 m-auto w-full rounded-t-lg  shadow-sm border p-3">
      <div className="w-full bg-gray-100 flex items-center justify-between top-[25%] p-2 rounded-l-full shadow-sm">
        <div className="flex items-center">
          <div className="w-32 rounded-full h-32 bg-pink-700 shadow-xl text-6xl text-white font-bold flex items-center justify-center">
            {user.name && user.name.slice(0, 1)}
          </div>
          <div className="flex flex-col ml-5">
            <div className="text-3xl font-bold">{user.name}</div>
            <div>{user.friends && user.friends.length} Friends</div>
          </div>
        </div>

        <div className="flex flex-row ml-5">
          {auth.username !== user.username && !user.isFriend && (
            <>
              {user.requestReceived ? (
                <button
                  className="text-white text-base shwdow px-4 py-2 rounded bg-purple-700 m-2"
                  onClick={confirmFriendButtonHandler}
                >
                  Confirm Friend
                </button>
              ) : (
                <>
                  {requested ? (
                    <button
                      className="text-white text-base shwdow px-4 py-2 rounded bg-red-900 m-2"
                      onClick={cancelFriendButtonHandler}
                    >
                      Cancel Request
                    </button>
                  ) : (
                    <button
                      className="text-white text-base shwdow px-4 py-2 rounded bg-blue-700 m-2"
                      onClick={addFriendRequestButtonHandler}
                    >
                      Add Friend
                    </button>
                  )}
                </>
              )}
            </>
          )}
          {auth.username === user.username && (
            <button
              className="text-white text-base shwdow px-4 py-2 rounded bg-purple-700 m-2"
              onClick={() => navigate("/settings")}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
