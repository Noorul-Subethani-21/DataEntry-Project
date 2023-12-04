import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "./Profile";

const ReportUserProfile = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <Profile />
    </div>
  </div>
);

export default ReportUserProfile;
