import React from "react";
import "./Detail.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
const Detail = () => {
  return (
    <div className="form-container">
      <h3>Report</h3>
      <div className="form">
        <div className="form1">
          <h5>Start Date</h5>
          <input
            style={{ border: "1px solid gray", width: "50%" }}
            type="text"
            placeholder="Enter"
          />
        </div>
        <div className="form1">
          <h5>End Date</h5>
          <input
            style={{ border: "1px solid gray", width: "50%" }}
            type="text"
            placeholder="Enter"
          />
        </div>
      </div>
      <button
        style={{
          color: "#fff",
          marginLeft: "30%",
          marginTop: "0px",
          padding: "10px",
          width: "50%",
        }}
      >
        Search
      </button>

      <div className="table">
        <div className="head">
          <h5>User Name</h5>
          <h5>Number</h5>
        </div>
        <div className="details">
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>

            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/reportuserprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/reportuserprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/reportuserprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/reportuserprofile"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Detail
              </Link>
            </button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <button className="view" style={{ width: "20%" }}>
              <Link
                to="/reportuserprofile"
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

export default Detail;
