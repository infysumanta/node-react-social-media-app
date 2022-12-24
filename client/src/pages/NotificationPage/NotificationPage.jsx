import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  getUserNotificationsList,
  markAllNotificationAsRead,
  readOneNotification,
} from "../../api";
import Layout from "../../components/Layouts/Layout";
import NotificationItem from "./NotificationItem";

const NotificationPage = () => {
  const [notificationsList, setNotificationsList] = useState([]);

  const markAllRead = async () => {
    const result = await markAllNotificationAsRead();
    if (result) {
      setNotificationsList(result.response?.data?.notifications);
      toast.success(result.response?.data?.message);
    } else {
      toast.error("Something went wrong type again later");
    }
  };

  const fetchNotification = async () => {
    const res = await getUserNotificationsList();
    setNotificationsList(res.response?.data?.notifications);
  };

  const readNotification = async (notification_id) => {
    const result = await readOneNotification({
      notification_id: notification_id,
    });
    setNotificationsList(result.response?.data?.notifications);
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  return (
    <Layout>
      {notificationsList && (
        <div className="w-full lg:w-1/2 m-auto bg-white p-3 shadow rounded-lg mt-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-pink-700">Notifications</h2>
            {notificationsList.length > 0 && (
              <span
                className="text-pink-800 hover:underline cursor-pointer"
                onClick={markAllRead}
              >
                Mark all as Read
              </span>
            )}
          </div>
          <div>
            {notificationsList.length > 0 ? (
              <>
                {notificationsList.map((notification) => (
                  <NotificationItem
                    notification={notification}
                    key={notification._id}
                    readNotification={readNotification}
                  />
                ))}
              </>
            ) : (
              <div className="text-center text-xl italic p-10 border rounded">
                You dont have any notification yet.
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default NotificationPage;
