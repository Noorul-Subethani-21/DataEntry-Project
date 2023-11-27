import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

function OtpPopup() {
  const [otp, setOtp] = useState('');

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '387px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '25px',
          borderRadius: '7px',
          fontFamily:'Poppins'
        }}
      >
        <div style={{ marginBottom: '25px' }}>Enter OTP</div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> </span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: '40px',
                height: '50px',
                fontSize: '16px',
                margin: '0 5px',
              }}
            />
          )}
        />
        <div
          style={{
            padding: '9px 15px',
            borderRadius: '9999px',
            cursor: 'pointer',
            color: 'white',
            backgroundColor: 'black',
            marginTop: '15px',
            fontFamily:'Poppins sans-serif'
          }}
        >
          Verify
        </div>
      </div>
    </div>
  );
}

export default OtpPopup;
