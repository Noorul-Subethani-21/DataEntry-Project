import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebars from "../UserDashboard/Sidebars";
import Assignment from "../NewAssignment/Assignmentt";

const NewAssignment = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebars />
      <Assignment />
    </div>
  </div>
);

export default NewAssignment;
