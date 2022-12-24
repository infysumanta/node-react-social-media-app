import React from "react";

const ProfileMenu = ({ profileMenu, setProfileMenu, menuList }) => {
  return (
    <div className="flex items-center justify-between  shadow-sm">
      <ProfileMenuItem
        profileMenu={profileMenu}
        setProfileMenu={setProfileMenu}
        menuList={menuList.POST}
        menuName="Post"
      />
      <ProfileMenuItem
        profileMenu={profileMenu}
        setProfileMenu={setProfileMenu}
        menuList={menuList.ABOUT}
        menuName="About"
      />
      <ProfileMenuItem
        profileMenu={profileMenu}
        setProfileMenu={setProfileMenu}
        menuList={menuList.FRIENDS}
        menuName="Friends"
      />
      <ProfileMenuItem
        profileMenu={profileMenu}
        setProfileMenu={setProfileMenu}
        menuList={menuList.PHOTOS}
        menuName="Photos"
      />
      <ProfileMenuItem
        profileMenu={profileMenu}
        setProfileMenu={setProfileMenu}
        menuList={menuList.EVENTS}
        menuName="Events"
      />
    </div>
  );
};

const ProfileMenuItem = ({
  profileMenu,
  setProfileMenu,
  menuList,
  menuName,
}) => {
  return (
    <div
      onClick={() => {
        setProfileMenu(menuList);
      }}
      className={`px-2 py-3 w-full text-center shadow uppercase font-bold border cursor-pointer ${
        profileMenu === menuList
          ? "text-black  bg-gray-100"
          : "text-gray-600  bg-white"
      }`}
    >
      {menuName}
    </div>
  );
};

export default ProfileMenu;
