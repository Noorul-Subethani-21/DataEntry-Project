import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Employee from "../AddEmployee/Employee";
const AddEmployee = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <Employee />
    </div>
  </div>
);

export default AddEmployee;
