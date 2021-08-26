import React from "react";

//CREATE COMMENT SECTION FOR USER. THEN CREATE FETCH REQUEST TO UPDATE PLAYER'S COMMENT
function WinBox({ player }) {
  return (
    <div>
      <img
        src="https://c.tenor.com/6Hixx4SFAeQAAAAM/backing-you-get-yours.gif"
        alt="win gif"
      />
      You won! The correct code was indeed ***! Good job player! Head to the
      leaderboard to see how you compare to other players!
    </div>
  );
}
export default WinBox;
