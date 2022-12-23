import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProfileTop from "./ProfileTop";
import ProfileMenu from "./ProfileMenu";
import PostsContain from "./MenuContain/PostsContain";
import AboutContain from "./MenuContain/AboutContain";
import FriendsContains from "./MenuContain/FriendsContains";
import PhotosContain from "./MenuContain/PhotosContain";
import EventsContains from "./MenuContain/EventsContains";
import { getUserDetailsByUsername } from "./../../api";
const ProfilePage = () => {
  let menuList = {
    POSTS: "posts",
    ABOUT: "about",
    FRIENDS: "friends",
    PHOTOS: "photos",
    EVENTS: "events",
  };
  const [profileMenu, setProfileMenu] = useState(menuList.POSTS);
  const [user, setUser] = useState({});
  let { username } = useParams();
  if (username.includes("@")) {
    username = username.slice(1);
  }

  const getUser = async (username) => {
    const res = await getUserDetailsByUsername(username);
    setUser(res.response?.data?.user);
  };

  useEffect(() => {
    getUser(username);
  }, [username]);

  const pageChoose = () => {
    switch (profileMenu) {
      case menuList.POSTS:
        return <PostsContain user={user} />;
      case menuList.ABOUT:
        return <AboutContain user={user} />;
      case menuList.FRIENDS:
        return <FriendsContains user={user} />;
      case menuList.PHOTOS:
        return <PhotosContain user={user} />;
      case menuList.EVENTS:
        return <EventsContains user={user} />;
      default:
        return <PostsContain user={user} />;
    }
  };

  return (
    <Layout>
      {user && (
        <div className="w-full lg:w-1/2 m-auto mt-5">
          <ProfileTop user={user} />
          <ProfileMenu
            profileMenu={profileMenu}
            setProfileMenu={setProfileMenu}
            menuList={menuList}
          />

          <div className="w-fullh-auto mt-5">{pageChoose()}</div>
        </div>
      )}
    </Layout>
  );
};

export default ProfilePage;
