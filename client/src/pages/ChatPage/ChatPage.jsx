import React from "react";
import Layout from "../../components/Layouts/Layout";

const ChatPage = () => {
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
          <div class="flex flex-col w-2/5 border-r-2 h-[35rem]">
            <div class="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>

            <div className=" overflow-y-auto">
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
            </div>
          </div>
          <div class="w-full px-5 flex flex-col justify-between">
            <div class="flex flex-col mt-5 overflow-y-scroll h-[32rem]">
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
            <ChatInput />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const UserProfile = () => {
  return (
    <div class="flex flex-row py-4 px-2 items-center border-b-2">
      <div class="w-1/4">
        <img
          src="https://source.unsplash.com/otT2199XwI8/600x600"
          class="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div class="w-full">
        <div class="text-lg font-semibold">Everest Trip 2021</div>
        <span class="text-gray-500">Hi Sam, Welcome</span>
      </div>
    </div>
  );
};

const ChatLeft = () => {
  return (
    <>
      <div class="flex justify-start mb-4">
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          class="object-cover h-8 w-8 rounded-full"
          alt=""
        />
        <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </>
  );
};

const ChatRight = () => {
  return (
    <>
      <div class="flex justify-end mb-4">
        <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          class="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      </div>
    </>
  );
};

const ChatInput = () => {
  return (
    <div class="py-5">
      <input
        class="w-full bg-gray-300 py-5 px-3 rounded-xl"
        type="text"
        placeholder="type your message here..."
      />
    </div>
  );
};
export default ChatPage;
