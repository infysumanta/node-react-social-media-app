import { useNavigate } from "react-router-dom";

const UserChatProfile = ({ user, chatUser, setChatUser }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-row py-4 px-2 items-center border-b-2 cursor-pointer ${
        user === chatUser ? "bg-blue-100" : ""
      }`}
      onClick={() => {
        setChatUser(user);
        navigate(`/chats/${user._id}`);
      }}
    >
      <div className="w-1/4 mr-2">
        <img
          src="https://source.unsplash.com/otT2199XwI8/600x600"
          className="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="text-lg font-semibold">{user.name}</div>
        <span className="text-gray-500">@{user.username}</span>
      </div>
    </div>
  );
};
export default UserChatProfile;
