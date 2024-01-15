import React from "react";
import "../../css/main.css";
const EditUserInfoForm = ({
  data,
  handleChange,
  handleForm,
  user,
  navigate,
}) => {
  return (
    <form className="form-admin">
      <div className="labels">
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          name="userName"
          value={data.userName}
          onChange={handleChange}
        />
      </div>
      <div className="labels">
        <label htmlFor="firstname">First Name : </label>
        <input type="text" defaultValue={user.firstName} disabled />
      </div>
      <div className="labels">
        <label htmlFor="lastname">Last Name : </label>
        <input type="text" defaultValue={user.lastName} disabled />
      </div>
      <div className="button">
        <button className="edit-button" onClick={handleForm}>
          Save
        </button>
        {user.isLogged && (
          <button className="edit-button" onClick={() => navigate("/user")}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EditUserInfoForm;
