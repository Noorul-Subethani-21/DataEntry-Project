import React from "react";
import logo from "../../src/assets/logo.png";
import email from "../../src/assets/email.png";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div style={containerStyle} className="container">
      <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Poppins" }}>
        <img src={logo} alt="Logo" />
        <h2>Forget Password</h2>
      </div>

      <div style={formContainerStyle} className="form">
        <div style={inputGroupStyle} className="input-container">
          <img style={iconStyle} src={email} alt="" />
          <input
            style={inputStyle}
            type="text"
            placeholder="Enter Email"
            onFocus={(e) => e.target.style.outline = 'none'}
          />
        </div>
      </div>

      <div style={btnContainerStyle} className="btn">
        <button style={buttonStyle}>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to='/AdminOtp'>GET OTP</Link>
        </button>
      </div>
    </div>
  );
};

const containerStyle = {
  margin: 0,
  padding: 0,
  marginTop: 25,
};

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "40%",
  margin: "10px",
  padding: "10px",
  border: "1px solid #e9ebe9",
  height: "40px",
  color: "#e9ebe9",
  marginLeft: "30%",
  background: "#ebe9eb",
  borderRadius: "30px",
  gap: "5px",
  marginTop: "5%",
};

const inputGroupStyle = {
  display: "flex",
  alignItems: "center",
};

const iconStyle = {
  width: "4%",
  marginLeft: "20px",
  color: "#e9ebe9",
};

const inputStyle = {
  marginLeft: "10px",
  width: "100%",
  border: "none",
  background: "#ebe9eb",
  fontSize: "16px",
  color: "gray",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 400,
  height: "45px",
  marginTop: "0px",
  borderRadius: "20px",
};

const btnContainerStyle = {
  marginTop: "5%",
};

const buttonStyle = {
  marginLeft: '40%',
  padding: "15px",
  width: "20%",
  borderRadius: "25px",
  border: "2px solid black",
  color: "#fff",
  background: "black",
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
};

export default ForgetPassword;
