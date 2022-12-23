import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NonProtectedRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.user?.token) navigate("/");
  });

  return <>{children}</>;
};

export default NonProtectedRoutes;
