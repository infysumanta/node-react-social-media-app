import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../../redux/actions/authActions";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.user?.token) navigate("/login");
    dispatch(getUserDetails(navigate));
  });
  return (
    <>
      <Header />
      <div className="py-[4rem] bg-gray-100 min-h-[53rem]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
