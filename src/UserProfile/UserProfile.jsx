import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import User from "../UserProfile/User";

const UserProfile = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <User />
    </div>
  </div>
);

export default UserProfile;
