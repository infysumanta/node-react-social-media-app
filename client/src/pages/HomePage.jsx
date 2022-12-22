import React from "react";
import Layout from "../components/Layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between px-4">
        <div>left</div>
        <div>Middle</div>
        <div>right</div>
      </div>
    </Layout>
  );
};

export default HomePage;
