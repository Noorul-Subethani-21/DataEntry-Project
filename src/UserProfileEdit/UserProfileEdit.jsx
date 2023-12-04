import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../UserProfileEdit/Profile";

const UserProfileEdit = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <Profile />
    </div>
  </div>
);

export default UserProfileEdit;
