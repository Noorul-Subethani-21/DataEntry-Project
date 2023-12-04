import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import AddUser from "../AddUser/AddUser";

const AddUse = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <AddUser />
    </div>
  </div>
);

export default AddUse;
