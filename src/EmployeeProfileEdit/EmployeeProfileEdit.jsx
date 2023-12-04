import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Edit from "../EmployeeProfileEdit/Edit";

const EmployeeProfileEdit = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <Edit />
    </div>
  </div>
);

export default EmployeeProfileEdit;
