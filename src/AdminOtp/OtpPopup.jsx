import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

function OtpPopup() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
          borderRadius: "7px",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ marginBottom: "25px" }}>Enter OTP</div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> </span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "10px",
                height: "10px",
                fontSize: "16px",
                margin: "0 5px",
              }}
            />
          )}
        />
        <div
          style={{
            padding: "9px 15px",
            borderRadius: "9999px",
            cursor: "pointer",
            color: "white",
            backgroundColor: "black",
            marginTop: "15px",
            fontFamily: "Poppins sans-serif",
          }}
          onClick={handleVerify}
        >
          Verify
        </div>
      </div>
    </div>
  );
}

export default OtpPopup;
