import React from "react";
import {
  MdDarkMode,
  MdWbSunny,
  MdOutlineChat,
  MdOutlineNotificationsActive,
  MdSupervisedUserCircle,
  MdSearch,
} from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { getUserListBySearch } from "./../../api";
import { darkMode, lightMode } from "../../redux/actions/themeActions";
const Navbar = () => {
  const [userNavMenuShow, setUserNavMenuShow] = useState(false);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const auth = useSelector((state) => state.auth);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.theme);

  const searchHandler = async (e) => {
    setSearch(e.target.value);
    const user = await getUserListBySearch(search);
    setSearchList(user.response?.data?.users);
  };
  return (
    <nav className="flex items-center justify-between shadow-md py-1 px-5 bg-white">
      <div className="m-2">
        <span className="text-xl font-bold bg-pink-700 text-white rounded-lg p-2">
          NS
        </span>
        <Link className="px-3 font-bold text-pink-700 text-2xl" to="/">
          NodeReact
        </Link>
      </div>
      <div className="flex-grow px-5">
        <div className="flex items-center justify-between rounded-lg border px-3 border-pink-400 focus:border-pink-600">
          <input
            type="text"
            placeholder="Search..."
            onChange={searchHandler}
            className="p-2 text-sm w-full  transition ease-in-out focus:bg-white focus:border-pink-600 focus:outline-none"
          />
          <span>
            <MdSearch className="text-2xl text-pink-700" />
          </span>
        </div>
        {search && (
          <div className="absolute bg-white rounded w-1/3 mt-1 p-2 shadow border">
            {searchList.length <= 0 && (
              <span className="text-sm">Not Found ..</span>
            )}
            {searchList &&
              searchList.map((list, index) => (
                <SearchList user={list} key={index} setSearch={setSearch} />
              ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between flex-wrap text-pink-700">
        {/* dark/light */}
        <div className="text-3xl cursor-pointer px-3">
          {theme === "dark" ? (
            <MdDarkMode
              onClick={() => {
                dispath(lightMode());
              }}
            />
          ) : (
            <MdWbSunny
              onClick={() => {
                dispath(darkMode());
              }}
            />
          )}
        </div>

        {/* Chat */}
        <Link
          className="text-3xl cursor-pointer px-3 text-pink-700"
          to="/chats"
        >
          <MdOutlineChat />
        </Link>
        {/* Notification */}
        <Link
          className="text-3xl cursor-pointer px-3 text-pink-700"
          to="/notifications"
        >
          <MdOutlineNotificationsActive />
        </Link>
        {/* UserProfile */}
        <div
          className="text-3xl cursor-pointer px-3 text-pink-700"
          onMouseOver={() => setUserNavMenuShow(true)}
          onMouseLeave={() => setUserNavMenuShow(false)}
        >
          <MdSupervisedUserCircle />
          {userNavMenuShow && (
            <div className="absolute flex right-2 bg-white rounded shadow-sm flex-col text-base border w-48">
              <Link className="px-4 py-2" to={`/user/@${auth.user.username}`}>
                @{auth.user.username}
              </Link>
              <hr />
              <Link className="px-4 py-2" to={`/settings`}>
                Settings
              </Link>
              <hr />
              <div
                className="px-4 py-2"
                onClick={() => {
                  dispath(logout(navigate));
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const SearchList = ({ user, setSearch }) => {
  return (
    <Link
      className="flex items-center justify-between border shadow rounded p-2"
      to={`/user/@${user.username}`}
      onClick={() => {
        setSearch("");
      }}
    >
      <div className="bg-blue-200 text-xl mr-2 border border-blue-900 p-2  font-bold">
        {user.name && user.name.slice(0, 1)}
      </div>
      <div className="flex-grow text-lg ">
        {user.name} (@{user.username})
      </div>
    </Link>
  );
};

export default Navbar;
