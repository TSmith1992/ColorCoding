import React from "react";

function LoginPage({ onAddNewUser, player, handleSubmit }) {
  
  if (player.userName==="") {
    return (
      <div className="container">
        <form className="add-profile-form" onSubmit={handleSubmit}>
          <h3>Login Page:</h3>
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
            value="Create New Profile!"
            className="submit"
          />
        </form>
      </div>
    );
  } else {
    return (
      <>
        You'd better complete that before time runs out, {player.userName}!
      </>
    );
  }
}

export default LoginPage;
