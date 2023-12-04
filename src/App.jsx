// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import LoginAdmin from "./LoginAdmin/LoginAdmin";
import AdminOtp from "./AdminOtp/AdminOtp";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Registration/Register";
import AddUse from "./AddUser/AddUse";
import UserProfile from "./UserProfile/UserProfile";
import UserProfileEdit from "./UserProfileEdit/UserProfileEdit";
import Pending1 from "./Pending1/Pending1";
import PendingUserProfile from "./PendingUserProfile/PendingUserProfile";
import Blocked from "./BlockedUser/Blocked";
import Report from "./Report/Report";
import ReportUserProfile from "./ReportUserProfile/ReportUserProfile";
import Recovery from "./Recovery/Recovery";
import Employee from "./Employees/Employee";
import EmployeeProfile from "./EmployeeProfile/EmployeeProfile";
import AddEmployee from "./AddEmployee/AddEmployee";
import EmployeeProfileEdit from "./EmployeeProfileEdit/EmployeeProfileEdit";
import UserAdmin from "./UserLogin/UserLogin";
import UserDashboard from './UserDashboard/UserDashboard'
import NewAssignment from "./NewAssignment/NewAssignment";
import AssignmentReport from "./AssignmentReport/AssignmentReport";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/ForgetPassword" element={<AdminOtp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdrop" element={<Dashboard />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/adduser" element={<AddUse />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/userprofileedit" element={<UserProfileEdit />} />
        <Route path="/pending" element={<Pending1 />} />
        <Route path="/userprofilepending" element={<PendingUserProfile />} />
        <Route path="/blockeduser" element={<Blocked />} />
        <Route path="/report" element={<Report />} />
        <Route path="/reportuserprofile" element={<ReportUserProfile />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/employeeprofileedit" element={<EmployeeProfileEdit />} />
        <Route path="/userlogin" element={<UserAdmin />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/newassignment" element={<NewAssignment />} />
        <Route path="/assignmentreport" element={<AssignmentReport />} />
      </Routes>
    </Router>
  );
};

export default App;
