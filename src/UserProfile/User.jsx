import React from "react";
import "./User.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="form-container">
      <h3>Dharshan Mishra</h3>
      <form className="for">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Dharshan Sharma" />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="number" placeholder="9856321475" />
        </div>
        <div className="form-group">
          <label>Mail</label>
          <input type="password" placeholder="dharshan@gmail.com" />
        </div>

        <div className="form-group">
          <label>Registration Date</label>
          <input type="date" placeholder="03-Oco-2023 " />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input type="text" placeholder="5 Days " />
        </div>

        <div className="form-group">
          <label>Caller</label>
          <input type="text" placeholder="Priya Sharma" />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input type="text" placeholder="OTP" />
        </div>
        <div className="form-group">
          <label>Login Status</label>
          <input type="text" placeholder="Active" />
        </div>
      </form>
      <div className="icons">
        <Link to="/userprofileedit">
          <CreateIcon className="ico" />
        </Link>
        <RefreshIcon className="refresh" />
        <MessageIcon className="message" />
        <DeleteIcon className="dlticon" />
      </div>
    </div>
  );
};
export default User;
