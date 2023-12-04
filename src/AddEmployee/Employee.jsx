import React from "react";

const Employee = () => {
  return (
    <div className="forms-container">
      <h3>Add Employee</h3>
      <form className="forms">
        <div className="forms-group">
          <label>Name</label>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="forms-group">
          <label>Email</label>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="forms-group">
          <label>Mobile Number</label>
          <input type="text" placeholder="Enter Number" />
        </div>
        <div className="forms-group">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" />
        </div>
        <div className="forms-group">
          <label>Plan</label>
          <input type="text" placeholder="Select" />
        </div>
        <div className="forms-group">
          <label>Caller</label>
          <input type="text" placeholder="Select" />
        </div>
        <button className="bt" style={{ color: "#fff", margin:'0px', marginTop:'20px'}}>
          {" "}
          Save
        </button>
      </form>
    </div>
  );
};
export default Employee;
