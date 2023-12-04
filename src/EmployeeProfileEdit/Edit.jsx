import React from "react";

const Edit = () => {
  return (
    <div className="forms-container">
      <h3>Edit User Detail</h3>
      <form className="forms">
        <div className="forms-group">
          <label>Name</label>
          <input type="text" placeholder="Kaveri Kapoor " />
        </div>
        <div className="forms-group">
          <label>Email</label>
          <input type="text" placeholder="Kaveri@gmail.com" />
        </div>
        <div className="forms-group">
          <label>Password</label>
          <input type="password" placeholder="Kaveri@2023" />
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
          <label>Salary</label>
          <input type="text" placeholder="10,000" />
        </div>
      </form>
      <button className="button" style={{ color: "#fff" }}>
        Save
      </button>
    </div>
  );
};
export default Edit;
