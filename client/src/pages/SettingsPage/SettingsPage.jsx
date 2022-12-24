import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserAboutDetails } from "../../api";
import Button from "../../components/Form/Button";
import InputWithoutLabel from "../../components/Form/InputWithoutLabel";
import SelectWithoutLabel from "../../components/Form/SelectWithoutLabel";
import Layout from "../../components/Layouts/Layout";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../redux/actions/authActions";
const SettingsPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchAbout = async () => {
    const res = await getUserAboutDetails();
    const user = res.response?.data?.user;
    setName(user.name);
    setEmail(user.email);
    setUsername(user.username);
    setGender(user.gender);
    setDOB(moment(user.dob).format("YYYY-MM-DD"));
  };

  const userDetailsUpdateHandler = (e) => {
    e.preventDefault();
    let body = {
      name,
      username,
      email,
      gender,
      dob,
    };
    dispatch(updateUserDetails(body));
  };

  useEffect(() => {
    fetchAbout();
  }, []);
  return (
    <Layout>
      <div className="w-full lg:w-1/2 m-auto bg-white p-3 shadow rounded-lg mt-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-pink-700">Settings</h2>
        </div>
        <form className="mx-5" onSubmit={userDetailsUpdateHandler}>
          <table className="table-auto w-full my-4">
            <tbody>
              <tr>
                <td className="py-5">Name</td>
                <td className="py-5">
                  <InputWithoutLabel
                    name="name"
                    setValue={setName}
                    text="Name"
                    type="text"
                    value={name}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-5">Username</td>
                <td className="py-5">
                  <InputWithoutLabel
                    name="username"
                    setValue={setUsername}
                    text="Username"
                    type="text"
                    value={username}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-5">Email</td>
                <td className="py-5">
                  <InputWithoutLabel
                    name="email"
                    setValue={setEmail}
                    text="Email"
                    type="email"
                    value={email}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-5">Date of Birth</td>
                <td className="py-5">
                  <InputWithoutLabel
                    name="dob"
                    setValue={setDOB}
                    text="Date of Birth"
                    type="date"
                    value={dob}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-5">Gender</td>
                <td className="py-5">
                  <SelectWithoutLabel
                    name="gender"
                    text="Gender"
                    setValue={setGender}
                    value={gender}
                    data={[
                      { key: "male", text: "Male" },
                      { key: "female", text: "Female" },
                      { key: "other", text: "Other" },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <td className="py-5"></td>
                <td className="py-5">
                  <Button text="Update" type="submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </Layout>
  );
};

export default SettingsPage;
