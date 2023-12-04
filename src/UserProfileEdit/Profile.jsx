import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="forms-container">
      <h3>Edit User Detail</h3>
      <form className="forms">
        <div className="forms-group">
          <label>Name</label>
          <input type="text" placeholder="Dharshan" />
        </div>
        <div className="forms-group">
          <label>Email</label>
          <input type="text" placeholder="Dharshan@gmail.com" />
        </div>
        <div className="forms-group">
          <label>Password</label>
          <input type="password" placeholder="*******" />
        </div>
        <div className="forms-group">
          <label>Assess Code</label>
          <input type="password" placeholder="*******" />
        </div>

        <div className="forms-group">
          <label>Mobile Number</label>
          <input type="text" placeholder="9842523148" />
        </div>
        <div className="forms-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          />
        </div>

        <div className="forms-group">
          <label>Caller</label>
          <input type="text" placeholder="Priya Sharma" />
        </div>
        <div className="forms-group">
          <label>Amount</label>
          <input type="text" placeholder="10000" />
        </div>
        <div className="forms-group">
          <label>Start Date</label>
          <input type="date" placeholder="03-11-2023" />
        </div>
        <div className="forms-group">
          <label>End Date</label>
          <input type="date" placeholder="08-11-2023" />
        </div>
        <div className="forms-group">
          <label>Remark</label>
          <input
            type="text"
            placeholder="Lorem ipsum Lorem Ipsum Lorem Ipsum"
          />
        </div>
      </form>
      <button className="button" style={{ color: "#fff" }}>
        Save
      </button>
    </div>
  );
};
export default Profile;
