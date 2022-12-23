import React from "react";
import Layout from "../../components/Layouts/Layout";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="w-full lg:w-1/2 m-auto bg-white p-3 shadow rounded-lg mt-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-pink-700">Settings</h2>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
