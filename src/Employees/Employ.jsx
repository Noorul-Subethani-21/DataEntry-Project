import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const Employ = () => {
  return (
    <div className="form-container">
      <h3>Employees</h3>
      <button className="btn">
        <Link
          to="/addemployee"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Add Employee
        </Link>
      </button>

      <div className="table">
        <div className="head">
          <h5>Name</h5>
          <h5>Mobile</h5>
          <h5>Mail</h5>
        </div>
        <div className="details">
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button>
              <Link
                to="/employeeprofile"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                View Profile
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button>
              <Link
                to="/employeeprofile"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                View Profile
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button>
              <Link
                to="/employeeprofile"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                View Profile
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button>
              <Link
                to="/employeeprofile"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                View Profile
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Kaveri Kapoor</p>
            <h5>9856412372</h5>
            <p>kaveri@gmail.com</p>
            <button>
              <Link
                to="/employeeprofile"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                View Profile
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

export default Employ;
