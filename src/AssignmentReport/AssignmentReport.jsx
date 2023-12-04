import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebars from "../UserDashboard/Sidebars";
import Report from "../AssignmentReport/Report";

const AssignmentReport = () => (
  <div>
    <Navbar />

    <div
      style={{
        display: "flex",
        marginRight: "50%",
        fontFamily: "Poppins",
        marginTop: "20px",
        fontWeight: "bolder",
      }}
    >
      <Sidebars />
      <Report />
    </div>
  </div>
);

export default AssignmentReport;
