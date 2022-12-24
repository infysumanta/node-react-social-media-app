import React, { useState } from "react";
import { useEffect } from "react";
import { getUserAboutDetails } from "./../../../api";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const AboutContain = ({ user }) => {
  const [about, setAbout] = useState();
  const navigate = useNavigate();
  const fetchAbout = async (user_id) => {
    const res = await getUserAboutDetails(user_id);
    setAbout(res.response?.data?.user);
  };
  useEffect(() => {
    fetchAbout(user._id);
  }, [user]);
  return (
    <div className="w-full bg-white h-auto mt-2 shadow-lg rounded-lg border py-2 px-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold">About</h1>
        <span
          className="text-pink-800 hover:underline cursor-pointer"
          onClick={() => {
            navigate("/settings");
          }}
        >
          Edit Profile
        </span>
      </div>
      <div className="px-5 py-10 text-lg">
        {about && (
          <table className="table-auto w-full my-4">
            <tbody>
              <tr>
                <td className="py-1">Name</td>
                <td className="py-1">{about.name}</td>
              </tr>
              <tr>
                <td className="py-1">Username</td>
                <td className="py-1">@{about.username}</td>
              </tr>
              <tr>
                <td className="py-1">Email</td>
                <td className="py-1">{about.email}</td>
              </tr>
              <tr>
                <td className="py-1">Date of Birth</td>
                <td className="py-1">
                  {moment(about.dob).format("DD MMMM, YYYY")}
                </td>
              </tr>
              <tr>
                <td className="py-1">Gender</td>
                <td className="capitalize py-1">{about.gender}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AboutContain;
