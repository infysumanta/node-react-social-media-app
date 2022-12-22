import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-[4rem] bg-gray-100">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
