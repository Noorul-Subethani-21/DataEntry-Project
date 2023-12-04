import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Pending from "../PendingUserProfile/Pending";

const UserProfilePending = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <Pending />
    </div>
  </div>
);

export default UserProfilePending;
