import React from "react";
import logo from "../../src/assets/logo.png";
import { Link } from "react-router-dom";
import LoginAdmin from "../LoginAdmin/LoginAdmin";

const Login = () => {
  return (
    <div style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="login">
        <img src={logo} alt="" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '90%', margin: '20px', padding: '30px' }}>
        <button style={{ textDecoration: 'none',  padding: '15px', width: '100%', borderRadius: '25px', border: '2px solid black', color: '#fff', background: 'black', fontWeight: 700, fontFamily: '"Poppins", sans-serif', marginLeft: '10%', marginTop: '20px' }}>
          <Link style={{textDecoration:'none', color:'#fff'}}to="/admin">
            Login as Admin
          </Link>
        </button>
        
        <button style={{ padding: '15px', width: '100%', borderRadius: '25px', border: '2px solid black', color: '#fff', background: 'black', fontWeight: 700, fontFamily: '"Poppins", sans-serif', marginLeft: '10%', marginTop: '20px' }}>
          Login as User
        </button>
      </div>
    </div>
  );
};

export default Login;
