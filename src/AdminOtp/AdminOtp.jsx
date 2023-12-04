import React, { useState } from "react";
import logo from "../../src/assets/logo.png";
import email from "../../src/assets/email.png";
import OtpPopup from "../AdminOtp/OtpPopup";

const AdminOtp = () => {
  const [showOtp, setShowOtp] = useState(false);

  const getOtp = () => {
    setShowOtp(true);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img src={logo} alt="" />
        <h2>Forget Password</h2>
      </div>

      <div style={formContainerStyle}>
        <div style={inputContainerStyle}>
          <img src={email} alt="" style={imageStyle} />
          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
            onFocus={(e) => (e.target.style.outline = "none")}
          />
        </div>
      </div>

      <div style={btnStyle}>
        <button style={buttonStyle} onClick={getOtp}>
          Get OTP
        </button>
      </div>

      {showOtp && <OtpPopup />}
    </div>
  );
};

const containerStyle = {
  margin: "25px 0",
  textAlign: "center",
};

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Poppins",
};

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "40%",
  margin: "10px",
  padding: "10px",
  border: "1px solid #e9ebe9",
  height: "60px",
  color: "#e9ebe9",
  marginLeft: "30%",
  background: "#ebe9eb",
  borderRadius: "30px",
  gap: "5px",
  marginTop: "5%",
};

const inputContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const imageStyle = {
  width: "4%",
  marginLeft: "20px",
  outline: "none",
  border: "none",
};

const inputStyle = {
  marginLeft: "10px",
  width: "100%",
  border: "none",
  background: "#ebe9eb",
  fontSize: "16px",
  color: "gray",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  height: "45px",
  marginTop: "0px",
  borderRadius: "20px",
};

const btnStyle = {
  marginTop: "5%",
};

const buttonStyle = {
  marginLeft: "5%",
  padding: "15px",
  width: "20%",
  borderRadius: "25px",
  border: "2px solid black",
  color: "#fff",
  background: "black",
  fontWeight: 700,
  fontFamily: "Poppins, sans-serif",
};

export default AdminOtp;
