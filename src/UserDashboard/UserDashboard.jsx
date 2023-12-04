import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebars from "../UserDashboard/Sidebars";
import Dashboard from "../UserDashboard/Dashboard";

const UserProfile = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "300%" }}>
      <Sidebars />
      <Dashboard />
    </div>
  </div>
);

export default UserProfile;
