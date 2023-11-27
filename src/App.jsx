import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import LoginAdmin from "./LoginAdmin/LoginAdmin";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import AdminOtp from "./AdminOtp/AdminOtp";


const App = () => {
  return (
    <Router>
    

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/AdminOtp" element={<AdminOtp />} />
      </Routes>
    </Router>
  );
};

export default App;
