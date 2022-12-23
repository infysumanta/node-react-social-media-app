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
const ProfilePage = () => {
  let menuList = {
    POSTS: "posts",
    ABOUT: "about",
    FRIENDS: "friends",
    PHOTOS: "photos",
    EVENTS: "events",
  };
  const [profileMenu, setProfileMenu] = useState(menuList.POSTS);

  let { username } = useParams();
  if (username.includes("@")) {
    username = username.slice(1);
  }

  useEffect(() => {});

  const pageChoose = () => {
    switch (profileMenu) {
      case menuList.POSTS:
        return <PostsContain />;
      case menuList.ABOUT:
        return <AboutContain />;
      case menuList.FRIENDS:
        return <FriendsContains />;
      case menuList.PHOTOS:
        return <PhotosContain />;
      case menuList.EVENTS:
        return <EventsContains />;
      default:
        return <PostsContain />;
    }
  };

  return (
    <Layout>
      <div className="w-full lg:w-1/2 m-auto">
        <ProfileTop />
        <ProfileMenu
          profileMenu={profileMenu}
          setProfileMenu={setProfileMenu}
          menuList={menuList}
        />
        <div className="w-fullh-auto mt-5">{pageChoose()}</div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
