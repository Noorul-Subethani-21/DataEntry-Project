import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MovingIcon from "@mui/icons-material/Moving";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="app-container">
      <div className="nav">
        <div className="sidebar">
          <DashboardIcon className="sidebaricon" />
          <Link to="/userdashboard" className="sidebar-name">
            Dashboard
          </Link>
        </div>
        <div className="sidebar">
          <AssignmentIcon className="sidebaricon" />
          <Link to="/userdashboard" className="sidebar-name">
            Assignment
          </Link>
          <KeyboardArrowDownIcon />
        </div>
        <div className="sidebar">
          <KeyboardArrowRightIcon className="sidebaricon" />
          <Link to="/newassignment" className="sidebar-name">
            NewAssignment
          </Link>
        </div>
        <div className="sidebar">
          <KeyboardArrowRightIcon className="sidebaricon" />
          Filled Assignment
        </div>
        <div className="sidebar">
          <AccountCircleIcon className="sidebaricon" />
          Assignment
          <KeyboardArrowRightIcon />
        </div>

        <div className="sidebar">
          <MovingIcon className="sidebaricon" />
          <Link to="/assignmentreport" className="sidebar-name">
            Assignment Report
          </Link>
        </div>
        <div className="sidebar">
          <ExitToAppIcon className="sidebaricon" />
          SignOut
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
