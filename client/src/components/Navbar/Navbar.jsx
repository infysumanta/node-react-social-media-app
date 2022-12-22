import React from "react";
import {
  MdDarkMode,
  MdWbSunny,
  MdOutlineChat,
  MdOutlineNotificationsActive,
  MdOutlineSettingsSuggest,
  MdSupervisedUserCircle,
  MdSearch,
} from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [mode, setMode] = useState(true);
  return (
    <nav className="flex items-center justify-between shadow-md py-1 px-5 bg-white">
      <div className="m-2">
        <span className="text-xl font-bold bg-pink-700 text-white rounded-lg p-2">
          NS
        </span>
        <span className="px-3 font-bold text-pink-700 text-2xl">NodeReact</span>
      </div>
      <div className="flex-grow px-5">
        <div className="flex items-center justify-between rounded-lg border px-3 border-pink-400 focus:border-pink-600">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 text-sm w-full  transition ease-in-out focus:bg-white focus:border-pink-600 focus:outline-none"
          />
          <span>
            <MdSearch className="text-2xl text-pink-700" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap text-pink-700">
        {/* dark/light */}
        <div
          className="text-3xl cursor-pointer px-3"
          onClick={() => setMode(!mode)}
        >
          {mode ? <MdDarkMode /> : <MdWbSunny />}
        </div>
        {/* Settings */}
        <div className="text-3xl cursor-pointer px-3 text-pink-700">
          <MdOutlineSettingsSuggest />
        </div>
        {/* Chat */}
        <div className="text-3xl cursor-pointer px-3 text-pink-700">
          <MdOutlineChat />
        </div>
        {/* Notification */}
        <div className="text-3xl cursor-pointer px-3 text-pink-700">
          <MdOutlineNotificationsActive />
        </div>
        {/* UserProfile */}
        <div className="text-3xl cursor-pointer px-3 text-pink-700">
          <MdSupervisedUserCircle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
