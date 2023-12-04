import React from "react";
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import { BellIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        color: "black",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "90px", height: "90px", marginRight: "10px" }}
        />
        <span
          style={{
            fontSize: "23px",
            marginLeft: "10px",
            fontWeight: 700,
            fontFamily: "Poppins",
          }}
        >
          Dashboard
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "100px",
          gap: "20%",
        }}
      >
        <img
          src={image}
          alt="Profile"
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
        <BellIcon
          icon={BellIcon}
          style={{
            borderRadius: "50%",
            padding: "20px",
            color: "white",
            background: "black",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
