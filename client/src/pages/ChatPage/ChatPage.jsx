import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import { useParams, useNavigate } from "react-router-dom";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
import ChatInput from "./ChatInput";
import UserChatProfile from "./UserChatProfile";
let userList = [
  {
    _id: "1",
    name: "Sumanta Kabiraj",
    username: "sumanta",
  },
  { _id: "2", name: "Name One", username: "nameone" },
  { _id: "3", name: "Name Two", username: "nametwo" },
  { _id: "4", name: "Name Three", username: "namethree" },
  { _id: "5", name: "Name Four", username: "namefour" },
];

const ChatPage = () => {
  const [chatUser, setChatUser] = useState(userList[0]);
  const navigate = useNavigate();
  let { user_id } = useParams();
  useEffect(() => {
    navigate(`/chats/${user_id}`);
    // userList.map(({ _id, index }) => setChatUser(userList[index]));
  }, [navigate, user_id]);

  return (
    <Layout>
      <div className="w-full lg:w-1/2 m-auto bg-white p-3 shadow rounded-lg mt-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-pink-700">Chats</h2>
          <div className="text-pink-700">
            Unread <span>9</span>
          </div>
        </div>
        <div className="flex flex-row justify-between bg-white border rounded-lg">
          <div className="flex flex-col w-2/5 border-r-2 h-[35rem]">
            <div className="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>

            <div className=" overflow-y-auto">
              {userList &&
                userList.map((user, index) => (
                  <UserChatProfile
                    user={user}
                    chatUser={chatUser}
                    key={user._id}
                    setChatUser={setChatUser}
                  />
                ))}
            </div>
          </div>
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col h-[35rem]">
              <div className="py-2 px-2">
                <div className="flex flex-row py-2 px-2 items-center border-b-2">
                  <div className="mr-2">
                    <img
                      src="https://source.unsplash.com/otT2199XwI8/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="text-lg font-semibold">{chatUser.name}</div>
                    <span className="text-gray-500">@{chatUser.username}</span>
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto">
                <ChatLeft />
                <ChatRight />
                <ChatLeft />
                <ChatRight />
                <ChatLeft />
                <ChatRight />
                <ChatLeft />
                <ChatRight />
                <ChatLeft />
                <ChatRight />
                <ChatLeft />
                <ChatRight />
              </div>
            </div>
            <ChatInput />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
