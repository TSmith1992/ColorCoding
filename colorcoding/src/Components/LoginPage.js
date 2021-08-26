import React from "react";

function LoginPage({ onAddNewUser, player, handleSubmit, loginButton }) {
  return(
      <div className="container">
        <form className="add-profile-form" onSubmit={handleSubmit}>
          <h1>Login Page:</h1>
          <input
            type="text"
            name="userName"
            placeholder="Enter a username..."
            defaultValue={player.name}
            onChange={onAddNewUser}
          />
          <br />
          <input
            type="text"
            name="profilePic"
            placeholder="Enter your profile picture URL"
            defaultValue={player.image}
            onChange={onAddNewUser}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value={loginButton}
            className="submit"
          />
        </form>
      </div>
    );
  } 

export default LoginPage;
