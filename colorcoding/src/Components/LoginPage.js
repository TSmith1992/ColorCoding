import React from "react";

function LoginPage({ onAddNewUser, player, handleSubmit, loginButton }) {
  return(
      <div className="site-page">
        <form className="add-profile-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="userName"
            placeholder="Enter a username..."
            defaultValue={player.name}
            onChange={onAddNewUser}
            className="login-field"
          />
          <br />
          <input
            type="text"
            name="profilePic"
            placeholder="Enter your profile picture URL"
            defaultValue={player.image}
            onChange={onAddNewUser}
            className="login-field"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value={loginButton}
            className="submit"
            id="login-button"
          />
        </form>
      </div>
    );
  } 

export default LoginPage;
