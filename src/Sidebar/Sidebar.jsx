import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import MovingIcon from "@mui/icons-material/Moving";
import GroupsIcon from "@mui/icons-material/Groups";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="app-container">
      <div className="nav">
        <div className="sidebar">
          <DashboardIcon className="sidebaricon" />
          <Link to="/dashboard" className="sidebar-name">
            Dashboard
          </Link>
        </div>
        <div className="sidebar">
          <AccountCircleIcon className="sidebaricon" />
          <Link to="/userdrop" className="sidebar-name">
            Users
          </Link>
          <KeyboardArrowRightIcon />
        </div>
        <div className="sidebar">
          <KeyboardArrowRightIcon className="sidebaricon" />
          <Link to="/registration" className="sidebar-name">
            Registration
          </Link>
        </div>
        <div className="sidebar">
          <KeyboardArrowRightIcon className="sidebaricon" />
          <Link to="/pending" className="sidebar-name ">
            Pending
          </Link>
        </div>
        <div className="sidebar">
          <KeyboardArrowRightIcon className="sidebaricon" />
          Cancel
        </div>
        <div className="sidebar">
          <KeyboardArrowRightIcon className="sidebaricon" />
          Plan
        </div>
        <div className="sidebar">
          <PersonOffIcon className="sidebaricon" />{" "}
          <Link to="/blockeduser" className="sidebar-name">
            Blocked Users
          </Link>
        </div>
        <div className="sidebar">
          <MovingIcon className="sidebaricon" />
          <Link to="/report" className="sidebar-name">
            Report
          </Link>
        </div>
        <div className="sidebar">
          <MultilineChartIcon className="sidebaricon" />
          <Link to="/recovery" className="sidebar-name">
            Recovery
          </Link>
        </div>
        <div className="sidebar">
          <GroupsIcon className="sidebaricon"></GroupsIcon>
          <Link to="/employees" className="sidebar-name">
            Employees
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
