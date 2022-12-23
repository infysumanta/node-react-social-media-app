import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";
import Select from "../components/Form/Select";
import { connect } from "react-redux";
import { getAuthAction } from "../redux/actions/authActions";
import NonProtectedRoutes from "../components/authentication/NonProtectedRoutes";

const RegisterPage = ({ register }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [dob, setDOB] = useState("");
  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
  });

  const resetForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setGender("");
    setDOB("");
    setError({
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      dob: "",
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let body = {
      name,
      username,
      email,
      password,
      gender,
      dob,
    };
    setError((_) => ({
      name: !name ? "Name is Required" : "",
      username: !username ? "Username is Required" : "",
      email: !email ? "Email is Required" : "",
      password: !password ? "Password is Required" : "",
      gender: !gender ? "Gender is Required" : "",
      dob: !dob ? "Date of Birth is Required" : "",
    }));

    if (!name || !username || !email || !password || !gender || !dob) {
      return;
    }

    register(body, navigate);
    resetForm();
  };
  return (
    <NonProtectedRoutes>
      <div className="h-screen flex items-center justify-center bg-pink-100">
        <div className="p-7 w-full lg:w-1/4 m-auto flex items-center justify-between bg-white rounded-lg shadow-lg ">
          <div className="w-full">
            <div className="py-7 px-2 text-center">
              <h2 className="text-3xl font-bold mt-5 text-pink-700">
                NodeReact Social
              </h2>
              <h4 className="text-2xl font-semibold text-pink-800">
                Create Your Accunt Here! <br />
              </h4>
            </div>
            <form onSubmit={handleRegister}>
              <div className="mt-4 f">
                <Input
                  name="name"
                  setValue={setName}
                  text="Name"
                  type="text"
                  value={name}
                  error={error.name}
                />
              </div>
              <div className="mt-4">
                <Input
                  name="username"
                  setValue={setUsername}
                  text="Username"
                  type="text"
                  value={username}
                  error={error.username}
                />
              </div>
              <div className="mt-4">
                <Input
                  name="email"
                  setValue={setEmail}
                  text="Email"
                  type="email"
                  value={email}
                  error={error.email}
                />
              </div>
              <div className="mt-4">
                <Input
                  name="password"
                  setValue={setPassword}
                  text="Password"
                  type="password"
                  value={password}
                  error={error.password}
                />
              </div>
              <div className="mt-4">
                <Select
                  name="gender"
                  text="Gender"
                  error={error.gender}
                  setValue={setGender}
                  value={gender}
                  data={[
                    { key: "male", text: "Male" },
                    { key: "female", text: "Female" },
                    { key: "other", text: "Other" },
                  ]}
                />
              </div>
              <div className="mt-4">
                <Input
                  name="dob"
                  setValue={setDOB}
                  text="Date of Birth"
                  type="date"
                  value={dob}
                  error={error.dob}
                />
              </div>
              <div className="mt-3 text-right">
                <Link
                  className="text-pink-500 hover:text-pink-700"
                  to="/forgot-password"
                >
                  Fotgot Password? Reset Your Password
                </Link>
              </div>
              <Button text="Register" type="submit" />
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Already have an Account?{" "}
                <Link
                  to="/login"
                  className="text-pink-600 hover:text-pink-700 focus:text-pink-700 transition duration-200 ease-in-out"
                >
                  Login to you Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </NonProtectedRoutes>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getAuthAction(dispatch),
  };
};

export default connect(null, mapActionToProps)(RegisterPage);
