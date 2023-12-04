import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Detail from "../Recovery/Detail";

const Recovery = () => (
  <div>
    <Navbar />

    <div style={{ display: "flex", marginRight: "55%" }}>
      <Sidebar />
      <Detail />
    </div>
  </div>
);

export default Recovery;
