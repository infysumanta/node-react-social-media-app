import React from "react";
import { toast } from "react-hot-toast";
import Layout from "../../components/Layouts/Layout";

const NotificationPage = () => {
  const markAllRead = () => {
    toast.success("Marked all as Read");
  };
  return (
    <Layout>
      <div className="w-full lg:w-1/2 m-auto bg-white p-3 shadow rounded-lg mt-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-pink-700">Notifications</h2>
          <span
            className="text-pink-800 hover:underline cursor-pointer"
            onClick={markAllRead}
          >
            Mark all as Read
          </span>
        </div>
        <Notification read={false} />
        <Notification read={false} />
        <Notification read={true} />
        <Notification read={false} />
        <Notification read={false} />
        <Notification read={true} />
        <Notification read={false} />
        <Notification read={true} />
        <Notification read={false} />
        <Notification read={false} />
      </div>
    </Layout>
  );
};

const Notification = ({ read }) => {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer p-2 rounded-lg border ${
        read
          ? "bg-blue-100  border-blue-200 mt-1 hover:bg-blue-200 hover:border-blue-300 "
          : "bg-gray-50  border-gray-100 mt-1 hover:bg-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="h-10 w-10 rounded-lg bg-purple-300 flex items-center justify-center font-bold">
        <span>Icon</span>
      </div>
      <div className="flex-grow ml-3 text-lg">Notification Name</div>
      <div>23 Sept, 2022 11:55:00 P.M.</div>
    </div>
  );
};

export default NotificationPage;
