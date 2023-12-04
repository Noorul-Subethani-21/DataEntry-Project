import React from "react";
import "./Registration.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div className="form-container">
      <h3>Registration</h3>
      <button className="btn">
        <Link to="/adduser" className="users">
          Add User{" "}
        </Link>
      </button>
      <div className="form" style={{ width: "90%" }}>
        <SearchIcon className="icon" />
        <input
          type="search"
          style={{
            border: "none",
            width: "100%",
            padding: "0px",
            margin: "0px",
          }}
          placeholder="Search"
        />
      </div>

      <div className="table">
        <div className="head">
          <h5>User Name</h5>
          <h5>Email</h5>
        </div>
        <div className="details">
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>Dharshan@gmail</h5>

            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/userprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>Dharshan@gmail</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/userprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>Dharshan@gmail</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/userprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>Dharshan@gmail</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/userprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>Dharshan@gmail</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/userprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <div className="numbers">
            <ChevronLeftIcon />
            <span className="num">1</span>
            <span className="num">2</span>
            <span className="num">3</span>
            <span className="num">4</span>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
