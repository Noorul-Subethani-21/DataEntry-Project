import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import DashboardOverview from "./DashboardOverview";

const Dashboard = () => (
  <div>
    <Navbar />

    <div
      style={{
        display: "flex",
        marginLeft: "0px",
        gap: "0px",
        marginRight: "30%",
      }}
    >
      <Sidebar />
      <DashboardOverview />
    </div>
  </div>
);

export default Dashboard;
