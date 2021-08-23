import React from "react";

function LoginPage({ onAddNewUser, defaultLogin, handleSubmit }) {
  return (
    <div className="container">
      <form className="add-profile-form"
      onSubmit={handleSubmit}>
        <h3>Login Page:</h3>
        <input
          type="text"
          name="userName"
          placeholder="Enter a username..."
          defaultValue={defaultLogin.name}
          onChange={onAddNewUser}
        />
        <br />
        <input
          type="text"
          name="profilePic"
          placeholder="Enter your profile picture URL"
          defaultValue={defaultLogin.image}
          onChange={onAddNewUser}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Profile!"
          className="submit"
        />
      </form>
    </div>
  );
}

export default LoginPage;
