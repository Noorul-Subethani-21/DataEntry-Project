import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
const Detail = () => {
  return (
    <div className="form-container">
      <h3>Recovery</h3>
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
        <div className="head" style={{ gap: "12.5%" }}>
          <h5>User Name</h5>
          <h5>Number</h5>
          <h5>Start Date</h5>
          <h5>Amount</h5>
        </div>
        <div className="details">
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <h5>04-11-2023</h5>
            <h5>1,000</h5>
            <button style={{ color: "#fff" }}>View Detail</button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <h5>04-11-2023</h5>
            <h5>1,000</h5>
            <button style={{ color: "#fff" }}>View Detail</button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <h5>04-11-2023</h5>
            <h5>1,000</h5>
            <button style={{ color: "#fff" }}>View Detail</button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <h5>04-11-2023</h5>
            <h5>1,000</h5>
            <button style={{ color: "#fff" }}>View Detail</button>
          </div>
          <br />
          <div className="user">
            <p>Darshan Mishra</p>
            <h5>9632147857</h5>
            <h5>04-11-2023</h5>
            <h5>1,000</h5>
            <button style={{ color: "#fff" }}>View Detail</button>
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
