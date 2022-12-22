import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password, name, dob, email);
  };
  return (
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
                type="text"
                value={password}
                error={error.password}
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
  );
};

export default RegisterPage;
