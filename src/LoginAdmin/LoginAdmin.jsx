import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import email from "../../src/assets/email.png";
import password from "../../src/assets/password.png";

const LoginAdmin = () => {
  const inputStyle = {
    outline: 'none',
    marginLeft: '10px',
    width: '100%',
    border: 'none',
    background: '#ebe9eb',
    fontSize: '16px',
    color: 'gray',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '400',
    height: '45px',
    marginTop: '0px',
    borderRadius: '20px',
  };

  return (
    <div style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
        <img src={logo} alt="" />
        <h2 style={{ color: '#000', fontFamily: 'Poppins, serif' }}>Admin Login</h2>
      </div>

      <div style={{ ...inputContainerStyle, marginTop: '10px' }}>
        <div style={inputGroupStyle}>
          <img src={email} alt="" style={{ ...iconStyle, marginLeft: '20px' }} />
          <input type="text" placeholder="UserID" style={inputStyle} onFocus={(e) => e.target.style.outline = 'none'} />
        </div>
      </div>

      <br />

      <div style={inputContainerStyle}>
        <div style={inputGroupStyle}>
          <img src={password} alt="" style={{ ...iconStyle, marginLeft: '20px' }} />
          <input type="password" placeholder="Password" style={inputStyle} onFocus={(e) => e.target.style.outline = 'none'} />
        </div>
      </div>

      <div style={{ ...inputContainersStyle, marginTop: '20px' }}>

        <h3 style={{ fontSize: '16px', fontFamily: 'Poppins', border:'none', marginLeft:'20px', backgroundColor:'white' }}> Forget the password?</h3>
        <button style={buttonStyle}>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to='/ForgetPassword'>Login</Link>
        </button>
      </div>
    </div>
  );
};
const inputContainersStyle={
  border:'none',
  background:'none'
}

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  margin: '10px',
  padding: '10px',
  height: '40px',
  color: 'black',
  border :'1px solid #ebe9eb',
  background:'#ebe9eb',
  borderRadius: '30px',
  gap: '5px',
};

const inputGroupStyle = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  width: '4%',
};

const buttonStyle = {
  padding: '15px',
  width: '100%',
  borderRadius: '25px',
  border: '2px solid black',
  color: '#fff',
  background: 'black',
  fontWeight: '700',
  fontFamily: '"Poppins", sans-serif',
};

export default LoginAdmin;
