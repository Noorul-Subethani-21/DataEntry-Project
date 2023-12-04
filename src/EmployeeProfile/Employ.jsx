import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="form-container">
      <h3>Kaveri Kapoor</h3>
      <form className="for">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Kaveri kapoor" />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="number" placeholder="9856321475" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="password" placeholder="kaveri@gmail.com" />
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input type="text" placeholder="Caller " />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input type="text" placeholder="10000 " />
        </div>
      </form>
      <div className="icons">
        <Link to="/employeeprofileedit">
          <CreateIcon className="ico" />
        </Link>

        <DeleteIcon className="dlticon" />
      </div>
    </div>
  );
};
export default User;
