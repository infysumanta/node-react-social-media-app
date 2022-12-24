import moment from "moment";
const NotificationItem = ({ notification, readNotification }) => {
  return (
    <div
      onClick={() => {
        readNotification(notification._id);
      }}
      className={`flex items-center justify-between cursor-pointer p-2 rounded-lg border ${
        !notification.read
          ? "bg-blue-100  border-blue-200 mt-1 hover:bg-blue-200 hover:border-blue-300 "
          : "bg-gray-50  border-gray-100 mt-1 hover:bg-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="h-10 w-10 rounded-lg bg-purple-300 flex items-center justify-center font-bold">
        <span>{notification.title && notification.title.slice(0, 1)}</span>
      </div>
      <div className="flex-grow ml-3">
        <div className="text-base">{notification.title}</div>
        <div className="text-sm">{notification.description}</div>
      </div>
      <div>
        {moment(notification.date).format("DD MMM, YYYY HH:MM:SS A")}
        {/* 23 Sept, 2022 11:55:00 P.M. */}
      </div>
    </div>
  );
};

export default NotificationItem;
