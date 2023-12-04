import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Employ from "../EmployeeProfile/Employ";

const EmployeeProfile = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <Employ />
    </div>
  </div>
);

export default EmployeeProfile;
