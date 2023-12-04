import React from "react";
const Assignment = () => {
  return (
    <div className="forms-container">
      <h3>New Assignment</h3>
      <form className="forms">
        <div className="forms-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter" />
        </div>
        <div className="forms-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter " />
        </div>
        <div className="forms-group">
          <label>Email</label>
          <input type="text" placeholder="Enter " />
        </div>
        <div className="forms-group">
          <label>Mobile Number</label>
          <input type="text" placeholder="Enter " />
        </div>
        <div className="forms-group">
          <label>License</label>
          <input type="text" placeholder="Enter " />
        </div>
        <div className="forms-group">
          <label>IP</label>
          <input type="text" placeholder="Enter" />
        </div>
        <div className="forms-group">
          <label>Pincode</label>
          <input type="text" placeholder="Enter" />
        </div>
      </form>
      <button
        className="bt"
        style={{
          color: "#fff",
          margin: "0px",
          marginTop: "20px",
          width: "60%",
        }}
      >
        {" "}
        Submit
      </button>
    </div>
  );
};
export default Assignment;
