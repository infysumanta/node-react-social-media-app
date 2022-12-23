import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";
import { connect } from "react-redux";
import { getAuthAction } from "../redux/actions/authActions";
import NonProtectedRoutes from "../components/authentication/NonProtectedRoutes";
const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setError({
      username: "",
      password: "",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError((prevState) => ({
      username: !username ? "Username is Required" : "",
      password: !password ? "Password is Required" : "",
    }));

    if (!username || !password) {
      return;
    }

    let body = { username, password };
    login(body, navigate);
  };

  return (
    <NonProtectedRoutes>
      <div className="h-screen flex items-center justify-center bg-pink-100">
        <div className="p-10 w-full lg:w-3/6 m-auto flex items-center justify-between bg-white rounded-lg shadow-lg ">
          <div className="hidden lg:inline lg:w-1/2 py-7 px-2">
            <h4 className="text-2xl font-semibold text-pink-800">
              Login to the <br />
              Best Social Media App
            </h4>
            <h2 className="text-5xl font-bold mt-5 text-pink-700">
              NodeReact <br />
              Social
            </h2>
          </div>
          <div className="w-full lg:w-1/2 p-7">
            <form onSubmit={handleLogin}>
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
                  name="password"
                  setValue={setPassword}
                  text="Password"
                  type="password"
                  value={password}
                  error={error.password}
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
              <Button text="Login" />
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an Account?{" "}
                <Link
                  to="/register"
                  className="text-pink-600 hover:text-pink-700 focus:text-pink-700 transition duration-200 ease-in-out"
                >
                  Create an Account
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

export default connect(null, mapActionToProps)(LoginPage);
